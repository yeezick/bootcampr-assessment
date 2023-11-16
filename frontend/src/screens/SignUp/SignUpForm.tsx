import React, { useState } from 'react'
import './SignUpForm.scss'
import {
  Button,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const SignUpForm: React.FC = () => {
  const emailNotificationAgreement =
    'I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!'

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [passwordState, setPasswordState] = useState({
    showPassword: false,
    hasTyped: false,
  })

  const [confirmPasswordState, setConfirmPasswordState] = useState({
    showConfirmPassword: false,
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: handle submit
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })

    if (field === 'password') {
      setPasswordState({ ...passwordState, hasTyped: true })
    }
  }

  const handleTogglePasswordVisibility = () => {
    setPasswordState({
      ...passwordState,
      showPassword: !passwordState.showPassword,
    })
  }

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordState({
      ...confirmPasswordState,
      showConfirmPassword: !confirmPasswordState.showConfirmPassword,
    })
  }

  //validation
  const isLengthValid = formData.password.length >= 8
  const hasUpperCase = /[A-Z]/.test(formData.password)
  const hasLowerCase = /[a-z]/.test(formData.password)
  const hasSymbol = /[\p{P}]/u.test(formData.password)

  const showCriteria = passwordState.hasTyped && formData.password.length > 0

  return (
    <Box component='form' onSubmit={handleSubmit} className='form'>
      <InputLabel htmlFor='firstName'>First name</InputLabel>
      <TextField required id='firstName' name='firstName' autoFocus />
      <InputLabel htmlFor='lastName'>Last name</InputLabel>
      <TextField required id='lastName' name='lastName' />
      <InputLabel htmlFor='email'>
        Email address (ex. jeanine@bootcampr.io)
      </InputLabel>
      <TextField
        required
        id='email'
        name='email'
        type='email'
        autoComplete='email'
      />
      <InputLabel htmlFor='password'>
        Password (Minimum 8 characters, 1 uppercase, 1 lowercase, 1 symbol)
      </InputLabel>
      <OutlinedInput
        required
        name='password'
        id='password'
        autoComplete='current-password'
        type={passwordState.showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={e => handleInputChange('password', e.target.value)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleTogglePasswordVisibility}
              edge='end'
            >
              {passwordState.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {showCriteria && (
        <Box>
          <ul className='criteria'>
            <li className={hasUpperCase ? 'success' : 'error'}>1 uppercase</li>
            <li className={hasLowerCase ? 'success' : 'error'}>1 lowercase</li>
            <li className={hasSymbol ? 'success' : 'error'}>1 symbol</li>
            <li className={isLengthValid ? 'success' : 'error'}>
              Minimum 8 characters
            </li>
          </ul>
        </Box>
      )}
      <InputLabel htmlFor='confirmPassword'>Re-enter password</InputLabel>
      <OutlinedInput
        required
        name='confirmPassword'
        id='confirmPassword'
        autoComplete='current-password'
        type={confirmPasswordState.showConfirmPassword ? 'text' : 'password'}
        value={formData.confirmPassword}
        onChange={e => handleInputChange('confirmPassword', e.target.value)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleToggleConfirmPasswordVisibility}
              edge='end'
            >
              {confirmPasswordState.showConfirmPassword ? (
                <VisibilityOff />
              ) : (
                <Visibility />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormControlLabel
        className='email-agreement checkbox-email-agreement'
        control={<Checkbox value='remember' />}
        label={emailNotificationAgreement}
      />
      <Button type='submit' className='submit-button'>
        Sign up
      </Button>
    </Box>
  )
}

export default SignUpForm