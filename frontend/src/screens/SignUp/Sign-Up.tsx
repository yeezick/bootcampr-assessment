import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InputField from '../../components/InputField/InputField'
import './Sign-Up.scss'
import PasswordField from 'components/PasswordField/PasswordField'

export const SignUp: React.FC = () => {
  const handleValidity = e => {
    if (e.target.checkValidity()) {
      e.target.className += ''
    }
    console.log(e.target.checkValidity())
  }

  return (
    <div className='signup-container'>
      <div className='header-container'>
        <h1>Join Bootcampr Today.</h1>
        <p>Get the experience. Get the job.</p>
      </div>
      <div className='body-container'>
        <div className='image-container'>
          <div>
            {/* <img
              src='https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e'
              alt=''
            /> */}
          </div>
        </div>
        <div className='form-container'>
          <form>
            <InputField
              type='text'
              label='First Name'
              identifier='first-name'
            />
            <InputField type='text' label='Last Name' identifier='last-name' />
            <InputField
              type='email'
              label='Email Address'
              placeholder='ex. jeanine@bootcampr.io'
              identifier='email-address'
            />
            <PasswordField
              type={'password'}
              label={'Password'}
              identifier={'password'}
            />

            {/* <label htmlFor='confirm-password'>
              <p>Re-enter Password</p>
              <div className='password-field'>
                <input
                  id='confirm-password'
                  type={passwordVisible ? 'text' : 'password'}
                  required
                />
                <IconButton
                  onClick={handlePasswordVisibility}
                  aria-label={
                    passwordVisible ? 'Hide Password' : 'Show Password'
                  }
                >
                  {passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </div>
              <p className='confirm-password-error-message error-message'>
                Password Doesn't Match!
              </p>
            </label> */}
            <label
              htmlFor='notification-consent-checkbox'
              id='notification-consent'
            >
              <input id='notification-consent-checkbox' type='checkbox' />
              <p>
                I agree to receive email notification(s). We will only send
                emails with important information, like project start dates.
                <br />
                We will not sell your information.
              </p>
            </label>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}
