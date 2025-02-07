import { Router } from 'express'
import UserController from '../controllers/userController.js'

const userRouter = Router()

userRouter.get('/get-user', UserController.getUser)
userRouter.post('/register', UserController.register)
userRouter.post('/login', UserController.login)

export default userRouter
