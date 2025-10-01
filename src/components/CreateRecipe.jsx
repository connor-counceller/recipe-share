import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { createRecipe } from '../api/recipes.js'

export function CreateRecipe() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState('')
  const queryClient = useQueryClient()
  const createRecipeMutation = useMutation({
    mutationFn: () => createRecipe({ title, author, image, ingredients }),
    onSuccess: () => queryClient.invalidateQueries(['recipes']),
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    createRecipeMutation.mutate()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='create-title'>Title: </label>
        <input
          type='text'
          name='create-title'
          id='create-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input
          type='text'
          name='create-author'
          id='create-author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='create-image-url'>Image URL: </label>
        <input
          type='text'
          name='create-image-url'
          id='create-image-url'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='create-ingredients'>Ingredients: </label>
        <input
          type='textarea'
          name='create-title'
          id='create-title'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <br />
      <input
        type='submit'
        value={createRecipeMutation.isPending ? 'Creating...' : 'Create'}
        disabled={!title || createRecipeMutation.isPending}
      />
      {createRecipeMutation.isSuccess ? (
        <>
          <br />
          Recipe created successfully!
        </>
      ) : null}
    </form>
  )
}
