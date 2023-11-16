import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormControl, InputLabel, TextField } from '@mui/material'
import './Signup.scss'

export const Signup: React.FC = () => {
  return (
    <div className='signup-container'>
      <div className='header-container'>
        <div className='header-grid'>
          <h2>Join Bootcampr today.</h2>
          <h4>Get the experience. Get the job.</h4>
        </div>
      </div>
      <div className='body-container'>
        <div>Image goes here</div>
        <SignUpForm />
      </div>
    </div>
  )
}

/* Signup Form */
const SignUpForm: React.FC = () => {
  return (
    <div className='signup-form-container'>
      <FormInput name='signup-firstname' label='First name' />
      <FormInput name='signup-lastname' label='Last name' />
      <FormInput
        name='signup-email'
        label='Email address (ex. jeanine@bootcampr.io)'
      />
      <FormInput
        name='signup-password'
        label='Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)'
        type='password'
      />
      <FormInput
        name='signup-re-password'
        label='Re-enter password'
        type='password'
      />
    </div>
  )
}

interface IFormInputProps {
  name: string
  label: string
  type?: string
}

const FormInput: React.FC<IFormInputProps> = (props: IFormInputProps) => {
  const { name, label, type } = props

  return (
    <div className='signup-form-input'>
      <label htmlFor={name}>{label}</label>
      <TextField
        type={type ? type : 'text'}
        hiddenLabel
        id={name}
        variant='filled'
        size='small'
        InputProps={{
          disableUnderline: true,
          sx: { borderRadius: 1 },
        }}
      />
    </div>
  )
}
