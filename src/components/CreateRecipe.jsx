import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../contexts/AuthContext.jsx'
import { createRecipe } from '../api/recipes.js'

export function CreateRecipe() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [token] = useAuth()
  const queryClient = useQueryClient()
  const createRecipeMutation = useMutation({
    mutationFn: () => createRecipe(token, { title, image, ingredients }),
    onSuccess: () => queryClient.invalidateQueries(['recipes']),
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    createRecipeMutation.mutate()
  }
  if (!token)
    return <div>Please log in to create and manage your recipes. </div>
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
        <>Recipe created successfully!</>
      ) : null}
    </form>
  )
}
