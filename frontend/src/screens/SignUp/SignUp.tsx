import React from 'react'
import SignupLogo from 'assets/SignupLogo.png'
import './Signup.scss'

export const SignUp: React.FC = () => {
  return (
    <div className='signup-container'>

      <div className="title">
        <h1 className='h1-title'>Join Bootcampr today.</h1>
        <h3 className='h3-title'>Get the experience. Get the job.</h3>
      </div>

      <div className="body-container">
        <div className="img-container">
            <img src={SignupLogo} alt='sign-up' />
        </div>
        <div className="form-container">
            <form className='form'>
              <label htmlFor="firstName">First name</label>
              <input 
                type="text" 
                className='firstName'
              />

              <label htmlFor="lastName">Last name</label>
              <input 
                type="text" 
                className="lastName" 
              />

              <label htmlFor="email">Email address (ex. jeanine@bootcampr.io) </label>
              <input 
                type="text" 
                className="email"
              />

              <label htmlFor="password">Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
              <input 
                type="text" 
                className="password" 
              />

              <label htmlFor="confirmPassword">Re-enter password </label>
              <input 
                type="text" 
                className="confirmPassword" 
              />

              <label>
                <input 
                  type="checkbox" 
                  className="notifications" 
                />
                I agree to receive email notification(s). We will only send 
                emails with important information, like project start dates. 
                We will not sell your information!
              </label>

              <button type='submit' className="signup-button">Sign Up</button>

            </form>
        </div>
      </div>

    </div>
  )
}
