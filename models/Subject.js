const mongoose = require('mongoose')
const { Schema, model }   = mongoose

const subjectSchema = new Schema({
  name: String
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Subject = model('Subject', subjectSchema)
module.exports = Subject
