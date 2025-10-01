import { initDatabase } from './db/init.js'
import { Recipe } from './db/models/recipe.js'

await initDatabase()

const recipe = new Recipe({
  title: 'Hello Mongoose 2!',
  author: 'CC',
  ingredients:
    'This recipe is also stored in a MongoDB database using Mongoose.',
  image: 'http://example.com/image2.jpg',
  tags: ['mongoose', 'mongodb'],
})
const createdRecipe = await recipe.save()
await Recipe.findByIdAndUpdate(createdRecipe._id, {
  $set: { title: 'Hello again, Mongoose!' },
})

await recipe.save()

const recipes = await Recipe.find()
console.log(recipes)
