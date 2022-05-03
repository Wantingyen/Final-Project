// require mongodb, connect to all database
const mongoose = require('mongoose')

module.exports = mongoose
    // @ts-ignore
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => console.log(e))

    
//Models
require('../models/Category')
require('../models/Recipe')


