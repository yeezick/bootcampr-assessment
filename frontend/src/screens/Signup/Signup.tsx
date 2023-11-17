import React from 'react'
import { FormPWInput, FormTextInput } from './components/FormTextInput'
import { FormCheckBoxInput } from './components/FormCheckBoxInput'
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

const SignUpForm: React.FC = () => {
  return (
    <div className='signup-form-container'>
      <FormTextInput name='signup-firstname' label='First name' />
      <FormTextInput name='signup-lastname' label='Last name' />
      <FormTextInput
        name='signup-email'
        label='Email address (ex. jeanine@bootcampr.io)'
      />
      <FormPWInput
        name='signup-password'
        label='Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)'
      />
      <FormPWInput name='signup-re-password' label='Re-enter password' />
      <FormCheckBoxInput
        label='I agree to receive email notification(s). We will only send 
emails with important information, like project start dates. 
We will not sell your information!'
      />
    </div>
  )
}
