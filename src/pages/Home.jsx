import Header from '../components/Header'
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import { AUTH_TOKEN, MOVIE_LIST_END_POINT } from '../utils/constants'
import axios from 'axios'
import CardList from '../components/CardList'

const Home = () => {
  const [cardData, setCardData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMovieListData = async () => {
    const { data } = await axios.get(MOVIE_LIST_END_POINT, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    })
    setCardData(data)
    setIsLoading(false)
  }
  useEffect(() => {
    getMovieListData()
  }, [])

  return (
    <div>
      <Header />
      <Search setCardData={setCardData} />
      <CardList isLoading={isLoading} cardData={cardData} />
    </div>
  )
}

export default Home

