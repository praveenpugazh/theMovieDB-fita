import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { AUTH_TOKEN, TV_LIST_END_POINT } from '../utils/constants'
import axios from 'axios'
import CardList from '../components/CardList'

const TvPage = () => {
  const [cardData, setCardData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getTvListData = async () => {
    const { data } = await axios.get(TV_LIST_END_POINT, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    })
    setCardData(data)
    setIsLoading(false)
  }
  useEffect(() => {
    getTvListData()
  }, [])

  return (
    <div>
      <Header />
      <Search />
      <CardList isLoading={isLoading} cardData={cardData} />
    </div>
  )
}

export default TvPage

