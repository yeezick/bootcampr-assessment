import React, { useState } from 'react'
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

interface FormData {
  signUpFirstName: string
  signUpLastName: string
  signUpEmail: string
  signUpPassword: string
  signUpRePassword: string
  signUpCheckNotifications: boolean
}

interface PWChecks {
  isMinLength: boolean
  containsUpper: boolean
  containsLower: boolean
  containsSymbol: boolean
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    signUpFirstName: '',
    signUpLastName: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpRePassword: '',
    signUpCheckNotifications: true,
  })

  const [pwChecks, setPWChecks] = useState<PWChecksData>({
    isMinLength: false,
    containsUpper: false,
    containsLower: false,
    containsSymbol: false,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target

    // validate password

    // update state
    const inputValue = type === 'checkbox' ? checked : value
    setFormData({ ...formData, [name]: inputValue })
  }

  return (
    <form className='signup-form-container'>
      <FormTextInput
        name='signUpFirstName'
        label='First name'
        value={formData.signUpFirstName}
        handleInputChange={handleInputChange}
      />
      <FormTextInput
        name='signUpLastName'
        label='Last name'
        value={formData.signUpLastName}
        handleInputChange={handleInputChange}
      />
      <FormTextInput
        name='signUpEmail'
        label='Email address (ex. jeanine@bootcampr.io)'
        value={formData.signUpEmail}
        handleInputChange={handleInputChange}
      />
      <FormPWInput
        name='signUpPassword'
        label='Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)'
        value={formData.signUpPassword}
        handleInputChange={handleInputChange}
      />
      <FormPWInput
        name='signUpRePassword'
        label='Re-enter password'
        value={formData.signUpRePassword}
        handleInputChange={handleInputChange}
      />
      <FormCheckBoxInput
        name='signUpCheckNotifications'
        label='I agree to receive email notification(s). We will only send 
emails with important information, like project start dates. 
We will not sell your information!'
        value={formData.signUpCheckNotifications}
        handleInputChange={handleInputChange}
      />
    </form>
  )
}
