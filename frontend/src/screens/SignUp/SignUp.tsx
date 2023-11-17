import { useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpImage from 'assets/signup.svg'
import { CustomButton } from '../../components/Button/CustomButton'
import { FormControlLabel, Checkbox } from '@mui/material'
import { TextInput } from '../../components/Inputs/TextInput'
import { PasswordInput } from 'components/Inputs/PasswordInput'
import './SignUp.scss'

export const SignUp: FC = () => {
  const navigate = useNavigate()
  const handleFormSubmitButton = () => {
    navigate('/sign-up')
  }
  return (
    // <div className='signup'>
    <div className='signup-container'>
      <div className='signup-header'>
        <h2>Join Bootcampr today.</h2>
        <h4>Get the experience. Get the job.</h4>
      </div>
      <div className='signup-content'>
        <img src={SignUpImage} alt='signup' />
        <form className='signup-form'>
          <TextInput label='First Name' type='text' />
          <TextInput label='Last Name' type='text' />
          <TextInput
            label='Email address (ex. jeanine@bootcampr.io)'
            type='email'
          />
          <PasswordInput label='Password' type='password' />
          <PasswordInput label='Re-enter Password' type='password' />
          <FormControlLabel
            control={<Checkbox name='agree' />}
            label='I agree to receive email notification(s). We will only send emails
            with important information, like project start dates. We will not
            set your information'
          />
          <CustomButton onClick={handleFormSubmitButton} text='Sign up' />
        </form>
      </div>
    </div>
    // </div>
  )
}
