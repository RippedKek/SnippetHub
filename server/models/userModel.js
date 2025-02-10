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
  pinned: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: {
    token: String,
    expires: Date,
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
  color: {
    type: String,
    default: '#06B6D4',
  },
  github: {
    type: String,
    default: '',
  },
  facebook: {
    type: String,
    default: '',
  },
  instagram: {
    type: String,
    default: '',
  },
  linkedin: {
    type: String,
    default: '',
  },
  technologies: {
    type: Array,
    default: [],
  },
  snippets: {
    type: Array,
    default: [],
  },
  pins: {
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
