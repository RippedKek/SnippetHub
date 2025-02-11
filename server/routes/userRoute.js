import { Router } from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import UserController from '../controllers/userController.js'

const userRouter = Router()

userRouter.get('/get-user', authMiddleware, UserController.getUser)

userRouter.put('/edit-user', authMiddleware, UserController.editUser)
userRouter.put('/pin-snippet', authMiddleware, UserController.pinSnippet)
//userRouter.post('/unpin-snippet', authMiddleware, UserController.unpinSnippet)

userRouter.post('/register', UserController.register)
userRouter.post('/login', UserController.login)
userRouter.post('/verify-token', UserController.verifyToken)
userRouter.post('/reset-password', UserController.resetPassword)
userRouter.post(
  '/send-verification-email',
  UserController.sendVerificationEmail
)

export default userRouter
