import { Router } from 'express'
import SnippetController from '../controllers/snippetController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const snippetRouter = Router()

snippetRouter.get('/get-snippets', SnippetController.listSnippets)
snippetRouter.get(
  '/get-user-snippets',
  authMiddleware,
  SnippetController.getUserSnippets
)
snippetRouter.post(
  '/create-snippet',
  authMiddleware,
  SnippetController.createSnippet
)

export default snippetRouter
