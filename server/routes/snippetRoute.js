import { Router } from 'express'
import SnippetController from '../controllers/snippetController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const snippetRouter = Router()

snippetRouter.get('/get-snippets', SnippetController.listSnippets)
snippetRouter.get(
  '/get-snippet-languages/:username',
  SnippetController.getSnippetLanguages
)
snippetRouter.get(
  '/get-snippet-by-username/:username',
  SnippetController.getSnippetByUsername
)
snippetRouter.get(
  '/get-user-snippets',
  authMiddleware,
  SnippetController.getUserSnippets
)

snippetRouter.delete(
  '/delete/:id',
  authMiddleware,
  SnippetController.deletePost
)

snippetRouter.post(
  '/create-snippet',
  authMiddleware,
  SnippetController.createSnippet
)

export default snippetRouter
