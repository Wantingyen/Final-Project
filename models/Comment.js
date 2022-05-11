const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 15,
    },
    comment: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Comment', commentSchema)