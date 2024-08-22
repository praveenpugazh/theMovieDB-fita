import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

import FormPage from './pages/FormPage'
import { MovieContextProvider } from './context/MovieContext'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'

const TvPageLazy = lazy(() => import('./pages/TvPage'))

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/tv',
      element: (
        <Suspense fallback={<h1>loading....</h1>}>
          <TvPageLazy />
        </Suspense>
      )
    },
    {
      path: '/form',
      element: <FormPage />
    }
  ])

  return (
    <>
      <Provider store={store}>
        <MovieContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </MovieContextProvider>
      </Provider>
    </>
  )
}

