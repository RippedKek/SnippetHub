import { Router } from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import UserController from '../controllers/userController.js'

const userRouter = Router()

userRouter.get('/get-user', authMiddleware, UserController.getUser)
userRouter.put('/edit-user', authMiddleware, UserController.editUser)
userRouter.post('/register', UserController.register)
userRouter.post('/login', UserController.login)

export default userRouter
