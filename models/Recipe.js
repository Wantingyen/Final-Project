const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    description: {
      type: String,
      required: 'This field is required.'
    },
    ingredients: {
      type: Array,
      required: 'This field is required.'
    },
    category: {
      type: String,
      enum: ['Cake', 'Cookie', 'Macaron', 'Ice Cream', 'Beverage'],
      required: 'This field is required.'
    },
    image: {
      type: String,
      required: 'This field is required.'
    },
    instructions: {
      type: Array,
      required: 'This field is required.'
    },
})

recipeSchema.index({ name:'text', description: 'text'})
// wildcard indexing
//recipeSchema.explore({ "$**" : 'text' })

module.exports = mongoose.model('Recipe', recipeSchema)