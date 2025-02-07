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
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
    default: 'Unemployed',
  },
  organization: {
    type: String,
    required: true,
    default: 'Unemployed',
  },
  snippets: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
})

UserSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

const userModel = model.Developer || model('Developer', UserSchema)

export default userModel
