import { Router } from 'express'
import UserController from '../controllers/userController.js'

const userRouter = Router()

userRouter.get('/get-user', UserController.getUser)

export default userRouter
