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

  static async getUserSnippets(req, res) {
    try {
      const id = req.body.userId
      const user = await userModel.findById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      const snippetIds = user.snippets
      const snippets = await snippetModel.find({ _id: { $in: snippetIds } })
      res.status(200).json({ snippets })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
  static async createSnippet(req, res) {
    try {
      const id = req.body.userId
      const { title, description, language, snippet } = req.body

      const user = await userModel.findById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      const newSnippet = {
        name: user.name,
        username: user.username,
        userId: user._id,
        title: title,
        language: language,
        description: description,
        snippet: snippet,
      }
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      const Snippet = await snippetModel.create(newSnippet)
      await Snippet.save()

      user.snippets.push(Snippet._id)
      await user.save()

      res.status(201).json({ Snippet })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
}

export default SnippetController
