// require mongodb, connect to all database
const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })


module.exports = mongoose
    // @ts-ignore
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => console.log(e))


// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function(){
//     console.log('Connected')
// })

//Models
require('../models/Category')
require('../models/Recipe')


