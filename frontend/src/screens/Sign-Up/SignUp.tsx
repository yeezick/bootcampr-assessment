import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { sayHello } from 'utils/sampleController'
import './SignUp.scss'
import { sign } from 'crypto'

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

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasLowerCase: false,
    hasUpperCase: false,
    hasSpecialChar: false
  });

  const [passwordMatch, setPasswordMatch] = useState(false);

  const validatePassword = (password: string) => {
    const validations = {
      minLength: password.length >= 8,
      hasLowerCase: /[a-z]/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    }

    setPasswordValidation(validations);
  }

  const handleChange = (event) => {
    console.log(signupDetails)
    event.preventDefault();
    const {name, value} = event.target

    setSignupDetails((previous) => {
      return {...previous, [name]: value}
    })

    if(name === 'password') {
      if(value === signupDetails.passwordRe) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }

      validatePassword(value)
    }

    if(name === 'passwordRe') {
      if(value === signupDetails.password) {
        setPasswordMatch(true)
      } else {
        setPasswordMatch(false)
      }
    }

  }

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    //send async req to backend here
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
            <p className={passwordValidation.minLength ? 'minchar-valid': 'minchar-invalid'}>Min 8 characters</p>
            <p className={passwordValidation.hasUpperCase ? 'hasuppercase-valid': 'hasuppercase-invalid'}>1 upper</p>
            <p className={passwordValidation.hasLowerCase ? 'haslowercase-valid': 'haslowercase-invalid'}>1 lower</p>
            <p className={passwordValidation.hasSpecialChar ? 'hasspecialchar-valid': 'hasspecialchar-invalid'}>1 symbol</p>
          <h3>Re-enter password</h3>
            <input 
              type='password'
              name='passwordRe'
              onChange={handleChange}
            />
            <p className={passwordMatch ? 'passwordmatch-valid': 'passwordmatch-invalid'}>Passwords match</p>
          <div className='button-container'>
            <button 
              type='submit'
              disabled={Object.values(passwordValidation).includes(false) || !passwordMatch}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>  
        </form>
      </div>
    </div>
  )
}