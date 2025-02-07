import { Router } from 'express'
import SnippetController from '../controllers/snippetController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const snippetRouter = Router()

snippetRouter.post(
  '/create-snippet',
  authMiddleware,
  SnippetController.createSnippet
)

export default snippetRouter
