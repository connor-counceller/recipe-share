import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../contexts/AuthContext.jsx'
import { deleteRecipe } from '../api/recipes.js'
import PropTypes from 'prop-types'

export function DeleteRecipe({ recipeId }) {
  const [token] = useAuth()
  const queryClient = useQueryClient()
  const deleteRecipeMutation = useMutation({
    mutationFn: () => deleteRecipe(token, recipeId),
    onSuccess: () => queryClient.invalidateQueries(['recipes']),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    deleteRecipeMutation.mutate()
  }

  if (!token) return
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='submit'
        value={deleteRecipeMutation.isPending ? 'Deleting...' : 'Delete'}
        disabled={deleteRecipeMutation.isPending}
      />
      {deleteRecipeMutation.isSuccess
        ? window.alert('Recipe deleted successfully!')
        : null}
    </form>
  )
}

DeleteRecipe.propTypes = {
  recipeId: PropTypes.string.isRequired,
}
