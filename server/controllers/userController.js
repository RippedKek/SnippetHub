import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import snippetModel from '../models/snippetModel.js'
import crypto from 'crypto'
import {
  transporter,
  generateResetEmailHTML,
} from '../config/nodemailerConfig.js'

class UserController {
  static async getUser(req, res) {
    try {
      const id = req.body.userId
      const user = await userModel.findById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      res.status(200).json({ user })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }

  static async getUserProfile(req, res) {
    try {
      const username = req.params.username
      const user = await userModel.findOne({ username })

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      res.status(200).json({ user })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Server error' })
    }
  }

  static async editUser(req, res) {
    try {
      const userId = req.body.userId
      const updateData = req.body.tempUser
      const user = await userModel.findById(userId)

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      Object.assign(user, updateData)
      await user.save()

      res.status(200).json({ user })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }

  static async register(req, res) {
    try {
      const user = req.body

      const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
      const hashedPassword = await bcrypt.hash(user.password, salt)
      user.password = hashedPassword

      const newUser = await userModel.create(user)
      res.status(201).json({ user: newUser })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body
      const user = await userModel.findOne({ email })

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' })
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      })

      res.status(200).json({ token })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }

  static async pinSnippet(req, res) {
    try {
      const id = req.body.userId
      const snippetId = req.body.id
      const user = await userModel.findById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      if (user.pins.includes(snippetId)) {
        return res.status(400).json({ message: 'Snippet already pinned' })
      }
      user.pins.push(snippetId)
      await user.save()

      const snippet = await snippetModel.findById(snippetId)
      const devUser = await userModel.findById(snippet.userId)
      if (!devUser) {
        return res.status(404).json({ message: 'Developer not found' })
      }
      devUser.pinned += 1
      await devUser.save()
      res.status(200).json({ message: 'Snippet pinned successfully' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }

  static async unpinSnippet(req, res) {
    try {
      const id = req.body.userId
      const snippetId = req.body.id
      const user = await userModel.findById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      user.pins = user.pins.filter((pin) => pin.toString() !== snippetId)
      await user.save()
      res.status(200).json({ message: 'Snippet unpinned successfully' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }

  static async sendVerificationEmail(req, res) {
    try {
      const email = req.body.email
      const user = await userModel.findOne({ email })
      if (!user) {
        return res.status(404).json({ message: 'User does not exist' })
      }

      if (user.resetToken.token) {
        return res
          .status(400)
          .json({ message: 'Verification email already sent' })
      }

      const token = crypto.randomBytes(32).toString('hex')
      const expires = Date.now() + 3600000

      user.resetToken = {
        token: token,
        expires: expires,
      }

      await user.save()

      const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: user.email,
        subject: 'Password Reset Verification',
        html: generateResetEmailHTML(user.name, token),
      }

      await transporter.sendMail(mailOptions)

      res.status(200).json({ message: 'Verification email sent' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  }

  static async verifyToken(req, res) {
    try {
      const token = req.body.token
      const user = await userModel.findOne({ 'resetToken.token': token })
      if (!user) {
        return res
          .status(404)
          .json({ message: 'User does not exist', success: false })
      }

      if (Date.now() > user.resetToken.expires) {
        return res
          .status(400)
          .json({ message: 'Token has expired', success: false })
      }

      res
        .status(200)
        .json({ message: 'Token verified successfully', success: true })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  }

  static async resetPassword(req, res) {
    try {
      const user = await userModel.findOne({
        'resetToken.token': req.body.token,
      })
      const password = req.body.password
      if (!user) {
        return res
          .status(404)
          .json({ message: 'User does not exist', success: false })
      }
      const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
      const hashedPassword = await bcrypt.hash(password, salt)
      user.password = hashedPassword

      user.resetToken = null

      await user.save()

      res
        .status(200)
        .json({ message: 'Password reset successfully', success: true })
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Server error' })
    }
  }
}

export default UserController
