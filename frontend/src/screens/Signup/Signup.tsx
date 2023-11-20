import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../../assets/SignUpHeroImage.jpg'
import {
  FormEmailInput,
  FormPWInput,
  FormTextInput,
} from './components/FormTextInput'
import { FormCheckBoxInput } from './components/FormCheckBoxInput'
import { Button } from '@mui/material'
import { addUser } from 'utils/userController'
import './Signup.scss'
import { AxiosResponse } from 'axios'

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
        <div className='body-image-grid'>
          <img src={heroImage} alt='sign up hero' />
        </div>
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
  const navigate = useNavigate()

  const [formData, setFormData] = useState<IFormData>({
    signUpFirstName: '',
    signUpLastName: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpRePassword: '',
    signUpCheckNotifications: false,
  })

  const [emailValid, setEmailValid] = useState<boolean>(true)

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
        emailValid &&
        inputsFlag
      ) {
        setFormInputsValid(true)
      } else {
        setFormInputsValid(false)
      }
    }
  }, [pwValidations, formData, emailValid])

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await addUser(
      formData.signUpFirstName,
      formData.signUpLastName,
      formData.signUpEmail,
      formData.signUpPassword
    )

    if ((response as AxiosResponse).statusText === 'OK') {
      // TODO: update to store JWT and load next page
      window.alert('Success!')
      navigate('/home')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='signup-form-container'>
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
      <FormEmailInput
        name='signUpEmail'
        type='email'
        label='Email address (ex. jeanine@bootcampr.io)'
        value={formData.signUpEmail}
        setEmailValid={setEmailValid}
        handleInputChange={handleInputChange}
      />
      {formData.signUpEmail.length > 0 && !emailValid && (
        <p className='signup-form-pw-valid-msgs'>
          This email is taken. Please try another email
        </p>
      )}
      <FormPWInput
        name='signUpPassword'
        label='Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)'
        value={formData.signUpPassword}
        handleInputChange={handleInputChange}
      />
      {emailValid &&
        (Object.values(pwValidations).includes(false) ||
          formData.signUpPassword !== formData.signUpRePassword) && (
          <div className='signup-form-pw-valid-msgs'>
            {formData.signUpPassword.trim() !== '' && (
              <p className={pwValidations.containsUpper ? 'valid' : ''}>
                1 uppercase
              </p>
            )}
            {formData.signUpPassword.trim() !== '' && (
              <p className={pwValidations.containsLower ? 'valid' : ''}>
                1 lowercase
              </p>
            )}
            {formData.signUpPassword.trim() !== '' && (
              <p className={pwValidations.containsSymbol ? 'valid' : ''}>
                1 symbol
              </p>
            )}
            {formData.signUpPassword.trim() !== '' && (
              <p className={pwValidations.isMinLength ? 'valid' : ''}>
                Minimum 8 characters
              </p>
            )}
          </div>
        )}
      <FormPWInput
        name='signUpRePassword'
        label='Re-enter password'
        value={formData.signUpRePassword}
        handleInputChange={handleInputChange}
      />
      {emailValid &&
        !formInputsValid &&
        formData.signUpPassword === formData.signUpRePassword &&
        !Object.values(pwValidations).includes(false) && (
          <p className='signup-form-pw-match-msgs'>Passwords match!</p>
        )}
      <FormCheckBoxInput
        name='signUpCheckNotifications'
        label='I agree to receive email notification(s). We will only send 
emails with important information, like project start dates. 
We will not sell your information!'
        value={formData.signUpCheckNotifications}
        handleInputChange={handleInputChange}
      />
      <Button
        className='signup-form-submit'
        type='submit'
        variant='contained'
        color='primary'
        disabled={!formInputsValid}
        sx={{ textTransform: 'none' }}
        fullWidth
      >
        Sign up
      </Button>
    </form>
  )
}
