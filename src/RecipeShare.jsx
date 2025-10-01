import { RecipeList } from './components/RecipeList.jsx'
import { CreateRecipe } from './components/CreateRecipe.jsx'
import { RecipeFilter } from './components/RecipeFilter.jsx'
import { RecipeSorting } from './components/RecipeSorting.jsx'
import { useQuery } from '@tanstack/react-query'
import { getRecipes } from './api/recipes.js'

export function RecipeShare() {
  const recipesQuery = useQuery({
    queryKey: ['recipes'],
    queryFn: () => getRecipes(),
  })

  const recipes = recipesQuery.data ?? []

  return (
    <div style={{ padding: 8 }}>
      <CreateRecipe />
      <br />
      <hr />
      Filter by:
      <RecipeFilter field='author' />
      <br />
      <RecipeSorting fields={['createdAt', 'updatedAt']} />
      <hr />
      <RecipeList recipes={recipes} />
    </div>
  )
}
