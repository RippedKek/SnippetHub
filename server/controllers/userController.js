import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

class UserController {
  static async getUser(req, res) {
    try {
      const user = req.body.user
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

      const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      })

      res.status(200).json({ token })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
}

export default UserController
