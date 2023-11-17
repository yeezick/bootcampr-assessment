import React, { useEffect, useState } from 'react'
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

interface IFormData {
  signUpFirstName: string
  signUpLastName: string
  signUpEmail: string
  signUpPassword: string
  signUpRePassword: string
  signUpCheckNotifications: boolean
}

interface IPWValidationsData {
  isMinLength: boolean
  containsUpper: boolean
  containsLower: boolean
  containsSymbol: boolean
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    signUpFirstName: '',
    signUpLastName: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpRePassword: '',
    signUpCheckNotifications: true,
  })

  const [pwValidations, setPWValidations] = useState<IPWValidationsData>({
    isMinLength: false,
    containsUpper: false,
    containsLower: false,
    containsSymbol: false,
  })

  const [formInputsValid, setFormInputsValid] = useState<boolean>(false)

  useEffect(() => {
    // check form inputs for validity
    // All fields must be complete and checkboxes must be flagged true
    // PW must meet requirements and must match
    let inputsFlag = true

    for (const value of Object.values(formData)) {
      if (
        !(typeof value === 'boolean' && value === true) &&
        !(typeof value === 'string' && (value as string).trim() !== '')
      ) {
        inputsFlag = false
      }

      if (
        !Object.values(pwValidations).includes(false) &&
        formData.signUpPassword === formData.signUpRePassword &&
        inputsFlag
      ) {
        setFormInputsValid(true)
      } else {
        setFormInputsValid(false)
      }
    }
  }, [pwValidations, formData])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id, value, type, checked } = event.target

    // validate password
    const lengthRegex = /^(?=.{8,})/
    const lowerCaseRegex = /^(?=.*[a-z])/
    const upperCaseRegex = /^(?=.*[A-Z])/
    const symbolRegex = /^(?=.*[!@#$%^&*])/

    if (id === 'signUpPassword') {
      setPWValidations({
        isMinLength: lengthRegex.test(value),
        containsUpper: upperCaseRegex.test(value),
        containsLower: lowerCaseRegex.test(value),
        containsSymbol: symbolRegex.test(value),
      })
    }

    // update form state
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
