// require dependencies
const express = require('express')
require('dotenv').config()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')



// initialize express app
const app = express()

const { NOT_FOUND_MSG, BAD_REQ_DATA } = require('./constants')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(expressLayouts)

// Set ejs
app.set('view engine', 'ejs')
app.set('layout', './layouts/main')


const routes = require('./routes/recipeRoutes.js')
app.use('/', routes)

app.get('*', (req, res) => {
     res.status(404).send(NOT_FOUND_MSG)
})

const PORT = process.env.PORT || 3600

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
    console.log('MongoDB is connected')
})