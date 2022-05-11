const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')

/* 
App Routes - list all of pages, they gonna link to recipeController
*/

// description - homepage
router.get('/', recipeController.homepage)
router.get('/explore', recipeController.exploreRecipes)
router.get('/category', recipeController.exploreCategory)
router.get('/category/:id', recipeController.exploreCategoryById)
router.get('/recipe/:id', recipeController.exploreRecipeById)
router.post('/search', recipeController.searchRecipe)
router.get('/about', recipeController.about)
router.get('/contact', recipeController.contact)
router.post('/contact', recipeController.comment)



module.exports = router