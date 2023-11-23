import React, { useState } from 'react'
import eye from '../../assets/eye.png'

function SignUpForm() {
  const [passwordType, setPasswordType] = useState('password')
  const [passwordConfirmationType, setPasswordConfirmationType] =
    useState('password')

  const revealPassword = (state, setter) => {
    if (state === 'password') {
      setter('text')
    } else if (state === 'text') {
      setter('password')
    }
  }

  return (
    <form className='form-container'>
      <div className='input-container'>
        <label>First Name</label>
        <input type='text' name='firstName' />
      </div>
      <div className='input-container'>
        <label>Last Name</label>
        <input type='text' name='lastName' />
      </div>
      <div className='input-container'>
        <label>Email address (ex. jeanine@bootcampr.io)</label>
        <input type='email' name='email' />
      </div>
      <div className='input-container'>
        <label>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
        <input type={passwordType} name='password' />
        <img
          src={eye}
          onClick={() => {
            revealPassword(passwordType, setPasswordType)
          }}
        />
      </div>
      <div className='input-container'>
        <label>Re-enter Password</label>
        <input type={passwordConfirmationType} name='passwordConfirmation' />
        <img
          src={eye}
          onClick={() => {
            revealPassword(
              passwordConfirmationType,
              setPasswordConfirmationType
            )
          }}
        />
      </div>
      <div className='agreement-box'>
        <input className='checkbox' type='checkbox' required />
        <p>
          I agree to receive email notification(s). We will only send emails
          with important information, like project start dates. We will not sell
          your information!
        </p>
      </div>
      <button>Sign Up</button>
    </form>
  )
}

export default SignUpForm
