import { Link, useLocation } from 'react-router-dom'
import Logo from 'assets/Logo.svg'
import './Nav.scss'

export const Nav: React.FC = () => {
  const location = useLocation();
  const homePage = location.pathname === '/';

  return (
    <nav>
      <div className='nav-container'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        {homePage && (
          <div>
            <Link className='sign-up' to='/sign-up'>
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
