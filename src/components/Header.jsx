import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-lime-600 p-5'>
      <Link to='/'>
        <h1 className='text-2xl'>The Movie DB</h1>
      </Link>
      <Link to='/tv'>TV Shows</Link>
      <button className='px-6 py-3 bg-slate-500 text-white rounded-md'>
        Login
      </button>
    </div>
  )
}

export default Header

