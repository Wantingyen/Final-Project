/**homepage controller */
require('../db/database')
const { NOT_FOUND_MSG, BAD_REQ_DATA } = require('../constants')
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')

/** 
 * get/
 * homepage
 * */ 

 exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('index', { title: 'Dessert World - The Best Dessert Recipes', categories })
  } catch (error) {
    res.satus(500).send(NOT_FOUND_MSG)
  }
}


/** 
 * get/
 * categories
 * */ 

exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'Dessert World - All Recipes', categories })
  } catch (error) {
    res.status(500).send(NOT_FOUND_MSG)
  }
}



// async function insertDymmyRecipeData(){
//     try {
//         await Recipe.insertMany([
//             {
//                 'name': 'Strawberry Drip Cake',
//                 'description': 
//                 'This colorful drip cake is made with vanilla cake layers, strawberry frosting and a gorgeous white chocolate ganache drip. This cake is as pleasing to the eye as it is to the sweet tooth!',
//                 'ingredients': [
//                     'all-purpose flour 265g',
//                     'granulated sugar 400g',
//                     'baking powder 6g',
//                     'salt 3g',
//                     'unsalted butter 150g',
//                     'egg whites 160ml',
//                     'vegetable oil 14ml',
//                     'vanilla extract 4ml',
//                     'whipping cream 80ml',
//                 ],
//                 'category': 'Cake',
//                 'image': 'strawberry-drip-cake.jpg'
//                 
//             },
            
//         ]);
//     }   catch(error){
//         console.log('err', + error)
//     }
// }

// insertDymmyRecipeData()