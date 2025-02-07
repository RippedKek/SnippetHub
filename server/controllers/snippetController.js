import snippetModel from '../models/snippetModel.js'

class SnippetController {
  static async createSnippet(req, res) {
    try {
      const payload = req.body
      const newSnippet = {
        name: payload.user.name,
        username: payload.user.username,
        userId: payload.user._id,
        title: payload.title,
        language: payload.language,
        description: payload.description,
        snippet: payload.snippet,
      }

      const snippet = await snippetModel.create(newSnippet)
      await snippet.save()
      res.status(201).json({ snippet })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
}

export default SnippetController
