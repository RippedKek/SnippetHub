import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import snippetModel from '../models/snippetModel.js'

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
}

export default UserController
