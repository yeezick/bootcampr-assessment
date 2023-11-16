import React from 'react'
import { TextField } from '@mui/material'
import Logo from '../../assets/SignUpImage.svg'
import './SignUp.scss'

export const SignUp: React.FC = () => {
  return (
    <div className='signup-container'>
      <div className='top-container'>
        <h1 className='first'>Join Bootcampr today.</h1>
        <h1 className='second'>Get the experience. Get the job.</h1>
      </div>
      <div className='bottom-container'>
        <img src={Logo} className='signup-image' />
        <div className='form-content'>
          <TextField helperText=' ' label='First Name' />
          <TextField helperText=' ' label='Last Name' />
        </div>
      </div>
    </div>
  )
}
