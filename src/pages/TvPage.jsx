import Header from '../components/Header'
import Search from '../components/Search'
import CardList from '../components/CardList'

const TvPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <CardList movie={false} />
    </div>
  )
}

export default TvPage

