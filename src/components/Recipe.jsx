import PropTypes from 'prop-types'
import { User } from './User.jsx'

export function Recipe({ title, ingredients, image, author }) {
  return (
    <article>
      <h3>{title}</h3>
      <div>Ingredients: {ingredients}</div>
      <br />
      <div>
        Image URL: <a href={image}> {image}</a>
      </div>
      <br />
      {author && (
        <em>
          Written by <User id={author} />
        </em>
      )}
      <br />
    </article>
  )
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
}
