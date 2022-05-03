/**homepage controller */
require('../db/database')
const { NOT_FOUND_MSG, BAD_REQ_DATA } = require('../constants')
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')

/** 
 * get
 * homepage
 * */ 


exports.homepage = async(req, res) => {
  res.render('index', { title: 'Dessert World - The Best Dessert Recipes' })
}


/** 
 * get/
 * explore all recipes
 * */ 


exports.exploreRecipes = async(req, res) => {
  try {
    const limitNumber = 5
    const category = await Category.find({}).limit(limitNumber)
    const cake = await Recipe.find({ 'category': 'Cake'}).limit(limitNumber)
    const cookie = await Recipe.find({ 'category': 'Cookie'}).limit(limitNumber)
    const macaron = await Recipe.find({ 'category': 'Macaron'}).limit(limitNumber)
    const icecream= await Recipe.find({ 'category': 'Ice Cream'}).limit(limitNumber)
    const beverage = await Recipe.find({ 'category': 'Beverage'}).limit(limitNumber)

    const dessert = { cake, cookie, macaron, icecream, beverage }

    res.render('explore', { title: 'All Recipes - Dessert World', category, dessert })
  } catch (error) {
    res.status(500).send(NOT_FOUND_MSG)
  }
}


/**
 * get categories
 * 這個頁面不會出現在網頁中任何連結
 * */ 


exports.exploreCategory = async(req, res) => {
  try {
    const category = await Category.find({})
    res.render('category', { title: 'Category - Dessert World', category } )
  } catch (error) {
    res.status(500).send(NOT_FOUND_MSG)
  }
} 


/**
 * get category by id
 * category
// */

exports.exploreCategoryById = async(req, res) => { 
  try {
    let categoryId = req.params.id
    const categoryById = await Recipe.find({ 'category': categoryId })
    res.render('category', { title: 'Category - Dessert World', categoryById } )
  } catch (error) {
    res.status(500).send(NOT_FOUND_MSG)
  }
} 




/** 
 * get recipe by id
 * recipe
 * */ 

 exports.exploreRecipeById = async(req, res) => {
  try {
    let recipeId = req.params.id
    const recipe = await Recipe.findById(recipeId)
    res.render('recipe', { title: 'Recipe - Dessert World', recipe } )
  } catch (error) {
    res.status(500).send(NOT_FOUND_MSG)
  }
} 


/** 
 * post/
 * serch
 * */ 

 exports.searchRecipe = async(req, res) => {
  try {
    let searchTerm = req.body.searchTerm
    let recipe = await Recipe.find( { $text: { $search: searchTerm, $diacriticSensitive: true } })
    res.render('search', { title: 'Search - Dessert World', recipe } )
  } catch (error) {
    res.status(500).send(NOT_FOUND_MSG)
  }
  
}


/** 
 * get 
 * about page
 * */ 

 exports.about = async(req, res) => {
  res.render('about', { title: 'About - Dessert World' })
}


/** 
 * get 
 * contact page
 * */ 

 exports.contact = async(req, res) => {
  res.render('contact', { title: 'Contact - Dessert World' })
 }
