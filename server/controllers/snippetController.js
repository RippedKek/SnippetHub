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

  static async getSnippetLanguages(req, res) {
    try {
      const username = req.params.username
      const user = await userModel.findOne({ username })
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      const snippetIds = user.snippets
      const snippets = await snippetModel.find({ _id: { $in: snippetIds } })
      const languages = snippets.map((snippet) => snippet.language[0])
      res.status(200).json({ languages })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Server error' })
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
      user.totalSnippets += 1
      await user.save()

      res.status(201).json({ Snippet })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }

  static async deletePost(req, res) {
    try {
      const id = req.params.id
      const userId = req.body.userId

      await snippetModel.findByIdAndDelete(id)

      const user = await userModel.findById(userId)
      user.snippets = user.snippets.filter(
        (snippet) => snippet.toString() !== id
      )
      user.totalSnippets -= 1
      await user.save()
      res.status(200).json({ message: 'Snippet deleted successfully' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
}

export default SnippetController
