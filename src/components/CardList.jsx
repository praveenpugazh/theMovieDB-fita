import { useContext, useEffect } from 'react'
import SingleCard from './SingleCard'
import { PropTypes } from 'prop-types'
import { MovieContext } from '../context/MovieContext'
import { useSelector, useDispatch } from 'react-redux'
import { setCardData, setLoadingFalse } from '../slice/tvSlice'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
const CardList = ({ movie }) => {
  const { state, getMovieListData } = useContext(MovieContext)

  const cardData = useSelector((store) => store.tv.cardData)

  const isLoading = useSelector((store) => store.tv.isLoading)

  const dispatch = useDispatch()

  const getCountriesData = async () => {
    const { data } = await axios.get(
      'https://restcountries.com/v3.1/independent?status=true'
    )

    dispatch(setCardData(data))
  }
  useEffect(() => {
    getCountriesData()
  }, [])

  useEffect(() => {
    movie && getMovieListData()
    dispatch(setLoadingFalse())
  }, [])

  if (isLoading) {
    return <h1>Loading....</h1>
  }
  // if (state.isLoading) {
  //   return <h1>Loading....</h1>
  // }
  return (
    <div className='flex items-center justify-between flex-wrap p-10'>
      {movie
        ? state.cardData.results.map((data) => {
            return <SingleCard key={data.id} data={data} />
          })
        : cardData.map((data) => {
            return <h1 key={data.id}>{data.name.common}</h1>
          })}
    </div>
  )
}

CardList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cardData: PropTypes.array
}

export default CardList

