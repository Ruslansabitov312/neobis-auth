import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Neobis Auth</Link>
      </div>

      <ul>
        <li>
          <Link to='/signin'>
            <FaSignInAlt /> Sign In
          </Link>
        </li>

        <li>
          <Link to='/signup'>
            <FaUser /> Sign Up
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
