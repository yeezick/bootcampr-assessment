import { Link, useLocation } from 'react-router-dom'
import Logo from 'assets/Logo.svg'
import './Nav.scss'

export const Nav = () => {
  const location = useLocation()
  return (
    <nav>
      <div className='nav-container'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <div>
         { location.pathname === '/' && (
         <Link className='sign-up' to='/sign-up'>
            Sign up
          </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
