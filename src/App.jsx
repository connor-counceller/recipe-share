import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecipeShare } from './RecipeShare.jsx'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecipeShare />
    </QueryClientProvider>
  )
}
