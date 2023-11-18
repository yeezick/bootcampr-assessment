import React from 'react'
import './SignUp.scss'
import Notes from 'assets/Notes.png'

export const SignUp: React.FC = () => {
  return (
    <div className='signup-container'>
      <div className='header-container'>
        <h2>Join Bootcampr today.</h2>
        <h4>Get the experience. Get the job.</h4>
      </div>
      <div className='image-container'>
        <img className='notes-hexagon' src={Notes} alt='Notetaker' />
      </div>
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
          <input type='password' name='password' />
        </div>
        <div className='input-container'>
          <label>Re-enter Password</label>
          <input type='password' name='passwordConfirmation' />
        </div>
      </form>
    </div>
  )
}
