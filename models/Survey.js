const mongoose = require('mongoose')
const { Schema, model }   = mongoose

const surveySchema = new Schema({
  ID: String,
  group: Number,
  polls : [{
    type: Schema.Types.ObjectId,
    ref: 'Poll'
  }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Survey = model('Survey', surveySchema)
module.exports = Survey
