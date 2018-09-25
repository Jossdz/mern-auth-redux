const mongoose = require('mongoose')
const { Schema, model }   = mongoose

const userSchema = new Schema({
  ID: String,
  name: String,
  rating: Number
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = model('User', userSchema)
module.exports = User
