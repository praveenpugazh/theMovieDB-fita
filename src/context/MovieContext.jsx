import { createContext, useReducer } from 'react'
import { AUTH_TOKEN, MOVIE_LIST_END_POINT } from '../utils/constants'
import axios from 'axios'

export const MovieContext = createContext()

// eslint-disable-next-line react/prop-types
export const MovieContextProvider = ({ children }) => {
  //   const [cardData, setCardData] = useState([])
  //   const [isLoading, setIsLoading] = useState(true)

  const initialState = {
    cardData: [],
    isLoading: true
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setCardData':
        return { ...state, cardData: action.payload }
      case 'setLoadingFalse':
        return { ...state, isLoading: false }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const getMovieListData = async () => {
    const { data } = await axios.get(MOVIE_LIST_END_POINT, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    })
    dispatch({ type: 'setCardData', payload: data })
    dispatch({ type: 'setLoadingFalse' })
  }

  return (
    <MovieContext.Provider value={{ state, getMovieListData }}>
      {children}
    </MovieContext.Provider>
  )
}

