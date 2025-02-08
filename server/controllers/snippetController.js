import snippetModel from '../models/snippetModel.js'
import userModel from '../models/userModel.js'

class SnippetController {
  static async listSnippets(req, res) {
    try {
      const snippets = await snippetModel.find({})
      res.status(200).json({ snippets })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
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

      const user = await userModel.findById(payload.user._id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      const snippet = await snippetModel.create(newSnippet)
      await snippet.save()

      user.snippets.push(snippet._id)
      await user.save()

      res.status(201).json({ snippet })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
}

export default SnippetController
