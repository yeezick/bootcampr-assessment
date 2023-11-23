import React, { useState } from 'react'
import eye from '../../assets/eye.png'
import { useNavigate } from 'react-router-dom'

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
  const [duplicateEmail, setDuplicateEmail] = useState({
    color: '#D90000',
    visibility: false
  })

  let navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (name === 'password' && value.length < 8) {
     
      console.log('Password must be at least 8 characters long')
    }
  }

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
          onChange={handleChange}
          required
        />
      </div>
      <div className='input-container'>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className='input-container'>
        <label>Email address (ex. jeanine@bootcampr.io)</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='input-container'>
        <label>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
        <input
          type={passwordType}
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <img
          src={eye}
          onClick={() => {
            revealPassword(passwordType, setPasswordType)
          }}
        />
      </div>
      <div className='validation-box'></div>
      <div className='input-container'>
        <label>Re-enter Password</label>
        <input
          type={passwordConfirmationType}
          name='passwordConfirmation'
          value={formData.passwordConfirmation}
          onChange={handleChange}
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
