import { Link } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
  return (
    <Link className="link_to" to="/blog">
      <p className="link">Tovább</p>
    </Link>
  )
}

export default Home
