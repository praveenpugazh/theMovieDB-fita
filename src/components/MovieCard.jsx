const MovieCard = ({ movie }) => {
  const base_image_url = 'https://image.tmdb.org/t/p/original'
  return (
    <div className='w-96 border border-black'>
      <img src={base_image_url + movie.backdrop_path} alt='movie image' />
      <h2 className='text-xl'>{movie.title}</h2>
      <p>Overview: {movie.overview}</p>
      <span>Popularity: {movie.popularity}</span>
      <span> Rating: {movie.vote_average}</span>
    </div>
  )
}

export default MovieCard

