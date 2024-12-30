import {Link} from "react-router-dom";
import './style.css'

const Header = () => {
  return (
    <div className="header-container">
    <span className="header">SHOP</span>
    <ul className='nav'>
      <li>
        <Link to='/'>Home Page</Link>
      </li>
      <li>
        <Link to='/cart'>Cart</Link>
      </li>
    </ul>
  </div>
  )
}

export default Header


