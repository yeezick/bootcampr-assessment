import { Link } from 'react-router-dom'
import Logo from 'assets/Logo.svg'
import './Nav.scss'
import { useState } from 'react'

export const Nav = ({showSignUp}) => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        {showSignUp ? (
          <div>
            <Link className='sign-up' to='/sign-up'>
              Sign up
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  )
}
