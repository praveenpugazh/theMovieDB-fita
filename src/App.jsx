import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import TvPage from './pages/TvPage'
import FormPage from './pages/FormPage'
import { MovieContextProvider } from './context/MovieContext'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <MovieContextProvider>
          <Home />
        </MovieContextProvider>
      )
    },
    {
      path: '/tv',
      element: <TvPage />
    },
    {
      path: '/form',
      element: <FormPage />
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

