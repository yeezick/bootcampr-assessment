import React from 'react'
import './SignUp.scss'
import Image from 'assets/Image.svg';
import { SignUpForm } from './SignUpForm';

//Render component for sign-up form
export const SignUp: React.FC = () => {
  return (
    <div>
      <div className='signup-container'>
        <div className='header-container'>
          <h1 className='header'>
            Join Bootcampr today.
          </h1>
          <h3 className='sub-header'>
            Get the experience. Get the job.
          </h3>
        </div>
        <img className='signup-image' alt='sign-up' src={Image}></img>
        <div className='form-container'>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
