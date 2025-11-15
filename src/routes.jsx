import { RecipeShare } from './pages/RecipeShare.jsx'
import { Signup } from './pages/Signup.jsx'
import { Login } from './pages/Login.jsx'

export const routes = [
  {
    path: '/',
    element: <RecipeShare />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]
