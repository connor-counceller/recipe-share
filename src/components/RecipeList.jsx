import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Recipe } from './Recipe.jsx'
import { DeleteRecipe } from './DeleteRecipe.jsx'
import { jwtDecode } from 'jwt-decode'
import { useAuth } from '../contexts/AuthContext.jsx'

export function RecipeList({ recipes = [] }) {
  const [token] = useAuth()

  if (token) {
    const { sub } = jwtDecode(token)
    const currentUser = { sub }

    return (
      <div>
        {recipes.map((recipe) => (
          <Fragment key={recipe._id}>
            <Recipe {...recipe} />
            <br />
            {currentUser.sub === recipe.author && (
              <DeleteRecipe recipeId={recipe._id} />
            )}
            --------------------------------------------------------------------------------
          </Fragment>
        ))}
      </div>
    )
  }
  return (
    <div>
      {recipes.map((recipe) => (
        <Fragment key={recipe._id}>
          <Recipe {...recipe} />
          ________________________________________________________
        </Fragment>
      ))}
    </div>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape(Recipe.propTypes)).isRequired,
}
