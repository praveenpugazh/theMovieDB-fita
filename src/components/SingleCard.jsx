import { PropTypes } from 'prop-types'

const SingleCard = ({ data }) => {
  const base_image_url = 'https://image.tmdb.org/t/p/original'
  return (
    <div className='w-96 border border-black'>
      <img src={base_image_url + data.backdrop_path} alt='movie image' />
      <h2 className='text-xl'>{data.title ? data.title : data.name}</h2>
      <p>Overview: {data.overview}</p>
      <span>Popularity: {data.popularity}</span>
      <span> Rating: {data.vote_average}</span>
    </div>
  )
}

export default SingleCard

export const withSingleCard = (SingleCard) => {
  return (
    <div>
      <span>Offer</span>
      <SingleCard />
    </div>
  )
}

SingleCard.propTypes = {
  data: PropTypes.object
}

