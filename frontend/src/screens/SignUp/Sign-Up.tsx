import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Button } from '@mui/material'
// import { sayHello } from 'utils/sampleController'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import './Sign-Up.scss'

export const SignUp: React.FC = () => {
  // const [helloResponse, setHelloResponse] = useState<string>('')

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
            <label htmlFor='first-name'>
              <p>First Name</p>
              <input id='first-name' type='text' required />
              <p className='first-name-error-message error-message'>error</p>
            </label>
            <label htmlFor='last-name'>
              <p>Last Name</p>
              <input id='last-name' type='text' required />
              <p className='last-name-error-message error-message'>error</p>
            </label>
            <label htmlFor='email-address'>
              <p>Email Address (ex. jeanine@bootcampr.io)</p>
              <input id='email-address' type='email' required />
              <p className='email-address-error-message error-message'>error</p>
            </label>
            <label htmlFor='password'>
              <p>Password</p>
              <input id='password' type='password' required />
              <p className='password-error-message error-message'>error</p>
            </label>
            <label htmlFor='confirm-password'>
              <p>Re-enter Password</p>
              <input id='confirm-password' type='password' required />
              <p className='confirm-password-error-message error-message'>
                error
              </p>
            </label>
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
