import mongoose from 'mongoose'

const { Schema, model } = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
  avatarUrl: {
    type: String,
    default: '',
  },
  snippets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Snippet',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

const userModel = model('User', UserSchema)

export default userModel
