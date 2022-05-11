require('../db/database')
const req = require('express/lib/request')
const { NOT_FOUND_MSG, BAD_REQ_DATA, SERVER_ERROR_MSG } = require('../constants')
const { updateOne } = require('../models/Category')
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')
const Comment = require('../models/Comment')

//test thread
//const Thread = require('../models/Thread')
//const { post } = require('../routes/recipeRoutes')
//const { ObjectId } = require('mongodb')


/** 
 * GET/
 * homepage
 * */ 

exports.homepage = async(req, res) => {
  res.render('index', { title: 'Dessert World - The Best Dessert Recipes' })
}


/** 
 * GET/
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
 * GET/
 * category by id
* */

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
 * GET/
 * recipe by id
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
 * POST/
 * search page
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
 * GET/ 
 * about page
 * */ 

exports.about = async(req, res) => {
  res.render('about', { title: 'About - Dessert World' })
}

/** 
 * GET/ 
 * contact page
 * */ 

// exports.contact = async(req, res) => {
//   res.render('contact', { title: 'Contact - Dessert World' })
// }



/** 
 * GET/ 
 * contact page
 * (thread(test page) (終於自己想出來如何顯示留言，感動落淚))
 * */ 


 exports.contact = async(req, res) => {
  try {
    const contact = await Comment.find({})
    const infoSubmitObj = req.flash('infoSubmit')
    const infoErrorsObj = req.flash('infoErrors')
    res.render('contact', { title: 'Contact - Dessert World', contact, infoSubmitObj, infoErrorsObj } )
  } catch (error) {
    res.status(500).send(NOT_FOUND_MSG)
  }
} 


/** 
 * POST/ 
 * comment section in contact page
 * */ 

exports.comment = async(req, res) => {
  try{
    const comment = new Comment({
      name: req.body.name,
      comment: req.body.comment,
      date: req.body.date
    })
    await comment.save(),

    req.flash('infoSubmit', 'Your comment is successfully published.')    
    res.redirect('contact')
  } catch (error) {
    req.flash('infoErrors', 'Sorry, something went wrong, please try again.')  
    res.redirect('contact')
  }
}















/**
 * GET/
 * categories (這個頁面不會出現在網頁中任何連結)
 * */ 


 exports.exploreCategory = async(req, res) => {
  try {
    const category = await Category.find({})
    res.render('category', { title: 'Category - Dessert World', category } )
  } catch (error) {
    res.status(500).send(NOT_FOUND_MSG)
  }
} 