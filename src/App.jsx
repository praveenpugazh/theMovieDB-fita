import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TvPage from './pages/TvPage'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/tv',
      element: <TvPage />
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

