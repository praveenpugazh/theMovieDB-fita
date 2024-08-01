import { useEffect, useState } from 'react'
import { AUTH_TOKEN, MOVIE_LIST_END_POINT } from '../utils/constants'
import MovieCard from './MovieCard'
import axios from 'axios'

const MovieList = () => {
  const [movieData, setMovieData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getMovieListData = async () => {
    const { data } = await axios.get(MOVIE_LIST_END_POINT, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    })
    setMovieData(data)
    setIsLoading(false)
  }
  useEffect(() => {
    getMovieListData()
  }, [])

  console.log(movieData)

  if (isLoading) {
    return <h1>Loading......</h1>
  }

  return (
    <div className='flex items-center justify-between flex-wrap p-10'>
      {movieData.results.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}

export default MovieList

