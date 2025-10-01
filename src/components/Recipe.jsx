import PropTypes from 'prop-types'

export function Recipe({ title, ingredients, image, author }) {
  return (
    <article>
      <h3>{title}</h3>
      <div>{ingredients}</div>
      {author && (
        <em>
          <br />
          Written by <strong>{author}</strong>
        </em>
      )}
      <div>{image}</div>
    </article>
  )
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
}
