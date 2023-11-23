import React, { useState } from 'react'
import './SignUp.scss'
import Notes from 'assets/Notes.png'
import SignUpHeader from './SignUpHeader'
import SignUpImage from './SignUpImage'
import SignUpForm from './SignUpForm'

export const SignUp: React.FC = () => {
  return (
        <div className='signup-container'>
          <SignUpHeader />
          <SignUpImage image={Notes} />
          <SignUpForm />
        </div>
  )
}
