import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser, validateEmail } from 'utils/sampleController'
import './SignUp.scss'
import Image from 'assets/Image.svg';
import Checkmark from 'assets/Icon.png';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { SignUpForm } from './SignUpForm';

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
