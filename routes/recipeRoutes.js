const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')

/* 
App Routes - list all of pages, they gonna link to recipeController
*/

// description - homepage
router.get('/', recipeController.homepage)
router.get('/categories', recipeController.exploreCategories)



module.exports = router