import React, { useState } from 'react'
import eye from '../../assets/eye.png'
import { useNavigate } from 'react-router-dom'
import SignUpValidationText from './SignUpValidationText'

function SignUpForm() {
  const [passwordType, setPasswordType] = useState('password')
  const [passwordConfirmationType, setPasswordConfirmationType] =
    useState('password')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const [passwordsMatch, setPasswordsMatch] = useState({
    visibility: 'none',
    color: '#23A6A1',
  })
  const [passwordUpperCaseValidation, setPasswordUpperCaseValidation] =
    useState({
      visibility: 'none',
      color: '#D90000',
    })
  const [passwordLowerCaseValidation, setPasswordLowerCaseValidation] =
    useState({
      visibility: 'none',
      color: '#D90000',
    })
  const [passwordSymbolValidation, setPasswordSymbolValidation] = useState({
    visibility: 'none',
    color: '#D90000',
  })
  const [passwordMinCharValidation, setPasswordMinCharValidation] = useState({
    visibility: 'none',
    color: '#D90000',
  })
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true)

  let navigate = useNavigate()

  const handleFormChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    //brute force validation, need to find a better method
    if (name === 'password' && value.length > 0) {
      setPasswordUpperCaseValidation(prevState => ({
        ...prevState,
        visibility: 'block',
      }))
      setPasswordLowerCaseValidation(prevState => ({
        ...prevState,
        visibility: 'block',
      }))
      setPasswordSymbolValidation(prevState => ({
        ...prevState,
        visibility: 'block',
      }))
      setPasswordMinCharValidation(prevState => ({
        ...prevState,
        visibility: 'block',
      }))
    } else if (name === 'password' && value.length === 0) {
      setPasswordUpperCaseValidation(prevState => ({
        ...prevState,
        visibility: 'none',
      }))
      setPasswordLowerCaseValidation(prevState => ({
        ...prevState,
        visibility: 'none',
      }))
      setPasswordSymbolValidation(prevState => ({
        ...prevState,
        visibility: 'none',
      }))
      setPasswordMinCharValidation(prevState => ({
        ...prevState,
        visibility: 'none',
      }))
    }

    if (name === 'password' && value.length < 8) {
      setPasswordMinCharValidation(prevState => ({
        ...prevState,
        color: '#D90000',
      }))
    } else if (name === 'password' && value.length >= 8) {
      setPasswordMinCharValidation(prevState => ({
        ...prevState,
        color: '#23A6A1',
      }))
    }

    if (name === 'password' && /[a-z]/.test(value) === true) {
      setPasswordLowerCaseValidation(prevState => ({
        ...prevState,
        color: '#23A6A1',
      }))
    } else if (name === 'password' && /[a-z]/.test(value) === false) {
      setPasswordLowerCaseValidation(prevState => ({
        ...prevState,
        color: '#D90000',
      }))
    }

    if (name === 'password' && /[A-Z]/.test(value) === true) {
      setPasswordUpperCaseValidation(prevState => ({
        ...prevState,
        color: '#23A6A1',
      }))
    } else if (name === 'password' && /[A-Z]/.test(value) === false) {
      setPasswordUpperCaseValidation(prevState => ({
        ...prevState,
        color: '#D90000',
      }))
    }

    if (name === 'password' && /[[`!@#$%^&*()_+=-]/.test(value) === true) {
      setPasswordSymbolValidation(prevState => ({
        ...prevState,
        color: '#23A6A1',
      }))
    } else if (
      name === 'password' &&
      /[[`!@#$%^&*()_+=-]/.test(value) === false
    ) {
      setPasswordSymbolValidation(prevState => ({
        ...prevState,
        color: '#D90000',
      }))
    }
    
  }

  //toggle password inputs between 'password' and 'text'
  const revealPassword = (state, setter) => {
    if (state === 'password') {
      setter('text')
    } else if (state === 'text') {
      setter('password')
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      if (data.message === 'User Registered Successfully') {
        navigate('/success')
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <div className='input-container'>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className='input-container'>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className='input-container'>
        <label>Email address (ex. jeanine@bootcampr.io)</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className='input-container'>
        <label>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
        <input
          type={passwordType}
          name='password'
          value={formData.password}
          onChange={handleFormChange}
          required
        />
        <img
          src={eye}
          onClick={() => {
            revealPassword(passwordType, setPasswordType)
          }}
        />
      </div>
      <div className='validation-container'>
        <SignUpValidationText
          visibility={passwordUpperCaseValidation.visibility}
          color={passwordUpperCaseValidation.color}
          text={'1 uppercase'}
        />
        <SignUpValidationText
          visibility={passwordLowerCaseValidation.visibility}
          color={passwordLowerCaseValidation.color}
          text={'1 lowercase'}
        />
        <SignUpValidationText
          visibility={passwordSymbolValidation.visibility}
          color={passwordSymbolValidation.color}
          text={'1 symbol'}
        />
        <SignUpValidationText
          visibility={passwordMinCharValidation.visibility}
          color={passwordMinCharValidation.color}
          text={'minimum 8 characters'}
        />
      </div>
      <div className='input-container'>
        <label>Re-enter Password</label>
        <input
          type={passwordConfirmationType}
          name='passwordConfirmation'
          value={formData.passwordConfirmation}
          onChange={handleFormChange}
          required
        />
        <img
          src={eye}
          onClick={() => {
            revealPassword(
              passwordConfirmationType,
              setPasswordConfirmationType
            )
          }}
        />
      </div>
      <div className='validation-container'>
        <SignUpValidationText
          visibility={passwordsMatch.visibility}
          color={passwordsMatch.color}
          text={'Passwords match!'}
        />
      </div>
      <div className='agreement-box'>
        <input className='checkbox' type='checkbox' required />
        <p>
          I agree to receive email notification(s). We will only send emails
          with important information, like project start dates. We will not sell
          your information!
        </p>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default SignUpForm
