import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SnippetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  language: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

SnippetSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

snippetModel = mongoose.model('Snippets', SnippetSchema)

export default snippetModel
