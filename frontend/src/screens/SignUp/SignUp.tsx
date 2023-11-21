import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Typograhy from '@mui/material/Typography'
import './SignUp.scss'
import hexagon from '../../assets/Hexagon.svg'

export const SignUp: React.FC = () => {
  return (
    <Container>
      <div className='landing-container'>
        <div className='signup-container'>
          <Typograhy variant='h3' component='h1'>Join Bootcampr today.</Typograhy>
          <Typograhy variant='h5' component='h2'>Get the experience. Get the Job.</Typograhy>
        </div>
        <div className='flex-container'>
          <img src={hexagon} alt='hand writing with pen' />
        </div>
        <div className='form-container'></div>
      </div>
    </Container>
  )
}
