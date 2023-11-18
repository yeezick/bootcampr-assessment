import { Link } from 'react-router-dom'
import Logo from 'assets/Logo.svg'
import './Nav.scss'

export const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
      </div>
    </nav>
  )
}
