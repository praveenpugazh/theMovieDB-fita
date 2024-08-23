import { useContext, useEffect } from 'react'
import SingleCard, { withSingleCard } from './SingleCard'
import { PropTypes } from 'prop-types'
import { MovieContext } from '../context/MovieContext'
import { useSelector, useDispatch } from 'react-redux'
import { setCardData, setLoadingFalse } from '../slice/tvSlice'
import axios from 'axios'
import useCountryData from '../utils/useCountryData'

// eslint-disable-next-line react/prop-types
const CardList = ({ movie }) => {
  const { state, getMovieListData } = useContext(MovieContext)

  const cardData = useSelector((store) => store.tv.cardData)

  const isLoading = useSelector((store) => store.tv.isLoading)

  const dispatch = useDispatch()

  const data = useCountryData
  console.log(data)

  useEffect(() => {
    movie && getMovieListData()
    dispatch(setLoadingFalse())
  }, [])

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  const OfferSingleCard = withSingleCard(SingleCard)

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

