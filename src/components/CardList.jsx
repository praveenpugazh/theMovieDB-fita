import SingleCard from './SingleCard'
import { PropTypes } from 'prop-types'

const CardList = ({ isLoading, cardData }) => {
  if (isLoading) {
    return <h1>Loading......</h1>
  }

  return (
    <div className='flex items-center justify-between flex-wrap p-10'>
      {cardData.results.map((data) => {
        return <SingleCard key={data.id} data={data} />
      })}
    </div>
  )
}

CardList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cardData: PropTypes.array
}

export default CardList

