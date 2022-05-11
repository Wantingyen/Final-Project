const mongoose = require('mongoose')
const commentSchema = mongoose
const Comment = require('../models/Comment')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field is required.']
  },
  description: {
    type: String,
    required: [true, 'This field is required.']
  },
  ingredients: {
    type: Array,
    required: [true, 'This field is required.']
  },
  category: {
    type: String,
    enum: ['Cake', 'Cookie', 'Macaron', 'Ice Cream', 'Beverage'],
    required: [true, 'This field is required.']
  },
  image: {
    type: String,
    required: [true, 'This field is required.']
  },
  instructions: {
    type: Array,
    required: [true, 'This field is required.']
  },
  comments: [{
      type: commentSchema.Types.ObjectId,
      ref: 'Comment'
    }]
})



recipeSchema.index({ name:'text', description: 'text'})
// wildcard indexing
//recipeSchema.explore({ "$**" : 'text' })

module.exports = mongoose.model('Recipe', recipeSchema)