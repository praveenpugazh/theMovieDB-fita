import Header from '../components/Header'
// import Search from '../components/Search'
import CardList from '../components/CardList'

const Home = () => {
  return (
    <div>
      <Header />
      <CardList movie={true} />
    </div>
  )
}

export default Home

