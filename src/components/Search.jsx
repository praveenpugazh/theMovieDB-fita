import axios from 'axios'
import { useState } from 'react'
import { AUTH_TOKEN } from '../utils/constants'
import { PropTypes } from 'prop-types'

const Search = ({ setCardData }) => {
  const [movieName, setMovieName] = useState('')
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${movieName}`

  const searchMovie = async () => {
    const { data } = await axios.get(SEARCH_URL, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    })
    setCardData(data)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        className='px-6 py-3 ml-10 mt-10'
        onChange={(e) => setMovieName(e.target.value)}
      />
      <button className='px-6 py-3 border border-black' onClick={searchMovie}>
        Search
      </button>
    </div>
  )
}

Search.propTypes = {
  setCardData: PropTypes.func
}

export default Search

