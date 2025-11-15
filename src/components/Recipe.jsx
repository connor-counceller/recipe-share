import PropTypes from 'prop-types'
import { User } from './User.jsx'
import { Link } from 'react-router-dom'

export function Recipe({
  title,
  ingredients,
  image,
  author,
  _id,
  fullRecipe = false,
}) {
  return (
    <article>
      {fullRecipe ? (
        <h3>{title}</h3>
      ) : (
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={image} style={{ width: 96 }} alt={image} />
          {' | '}
          <Link to={`/recipes/${_id}`}>{title}</Link>
          {' | '}
          {author && (
            <em>
              Written by <User id={author} />
            </em>
          )}
        </h3>
      )}
      {fullRecipe && (
        <>
          <img src={image} style={{ width: 320 }} alt={image} />
          <br />
          <div>Ingredients: {ingredients}</div>
          <br />
          {author && (
            <em>
              Written by <User id={author} />
            </em>
          )}
        </>
      )}
    </article>
  )
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  _id: PropTypes.string.isRequired,
  fullRecipe: PropTypes.bool,
}
