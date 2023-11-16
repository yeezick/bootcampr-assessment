import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { sayHello } from 'utils/sampleController'
import './SignUp.scss'

export const SignUp: React.FC = () => {
  
    return (
      <div>
        <div className='signup-container'>
          <div className='header-container'>
            <h1 className='header'>
              Join Bootcampr today.
            </h1>
            <h2 className='sub-header'>
              Get the experience. Get the job.
            </h2>
          </div>
          <div className='form-container'>
            <SignUpForm/>
          </div>
        </div>
      </div>
    )
  }

const SignUpForm: React.FC = () => {
  const [signupDetails, setSignupDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRe: '',
  });

  const handleChange = (event) => {
    console.log(signupDetails)
    event.preventDefault();
    const field = event.target.name;
    const value = event.target.value;

    setSignupDetails((previous) => {
      return {...previous, [field]: value}
    })
    
  }

  return (
    <div>
      <div className='form'>
        <form>
          <h3>First name</h3>
            <input 
              type='text'
              name='firstName'
              onChange={handleChange}
            />
          <h3>Last name</h3>
            <input 
              type='text'
              name='lastName'
              onChange={handleChange}
            />
          <h3>{'Email address [ex. jeanine@bootcampr.io]'}</h3>
            <input
              type='email'
              name='email'
              onChange={handleChange}
            />
          <h3>{'Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)'}</h3>
            <input 
              type='password'
              name='password'
              onChange={handleChange}
            />
          <h3>Re-enter password</h3>
            <input 
              type='password'
              name='passwordRe'
              onChange={handleChange}
            />  
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}