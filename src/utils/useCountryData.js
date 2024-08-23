import axios from 'axios'
import { useEffect, useState } from 'react'

const useCountryData = () => {
  const [data, setData] = useState([])

  const getCountriesData = async () => {
    const { data } = await axios.get(
      'https://restcountries.com/v3.1/independent?status=true'
    )
    setData(data)
  }
  useEffect(() => {
    getCountriesData()
  }, [])

  return data
}

export default useCountryData
