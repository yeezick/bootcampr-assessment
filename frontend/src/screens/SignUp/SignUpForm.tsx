import React, { useMemo, useState } from 'react'
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
  FormHelperText,
  FormControl,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { signUp, checkEmail } from 'utils/signUpController'

type formDataType = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

type formErrorsType = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

type passwordStateType = {
  showPassword: boolean
  hasTyped: boolean
}

type confirmPasswordStateType = {
  showConfirmPassword: boolean
}

const emailNotificationAgreement =
  'I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!'

const baseUrl = 'http://localhost:8001'

const SignUpForm: React.FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<formDataType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [formErrors, setFormErrors] = useState<formErrorsType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [passwordState, setPasswordState] = useState<passwordStateType>({
    showPassword: false,
    hasTyped: false,
  })

  const [confirmPasswordState, setConfirmPasswordState] =
    useState<confirmPasswordStateType>({
      showConfirmPassword: false,
    })

  const [isChecked, setIsChecked] = useState(false)

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { firstName, lastName, email, password } = formData
    try {
      const isEmailExisting = await isEmailExist()

      if (!isEmailExisting) {
        await signUp({ firstName, lastName, email, password })
        resetForm()
        navigate('/congrats')
      } else {
        setFormErrors(prevErrors => ({
          ...prevErrors,
          email: 'Email already exists',
        }))
      }
    } catch (error) {
      console.error('Error signing up:', error)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })

    setFormErrors(prevErrors => ({ ...prevErrors, [field]: '' }))

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

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(prevIsChecked => !prevIsChecked)
  }

  //validation
  const isLengthValid = formData.password.length >= 8
  const hasUpperCase = /[A-Z]/.test(formData.password)
  const hasLowerCase = /[a-z]/.test(formData.password)
  const hasSymbol = /[\p{P}]/u.test(formData.password)

  const showCriteria = passwordState.hasTyped && formData.password.length > 0

  const handleNameValidation = (field: string) => {
    if (!/^[a-zA-Z]+$/.test(formData[field])) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [field]: 'Name should only contains letters',
      }))
    } else {
      setFormErrors(prevErrors => ({ ...prevErrors, [field]: '' }))
    }
  }

  const handleEmailValidation = () => {
    if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(formData.email)) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        email: 'Invalid email address',
      }))
    } else {
      setFormErrors(prevErrors => ({ ...prevErrors, email: '' }))
    }
  }

  const handleEmptyInput = (field: string, fieldName: string) => {
    const value = formData[field].trim()
    if (value === '') {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [field]: `${fieldName} cannot be empty.`,
      }))
    } else {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [field]:
          prevErrors[field] === `${fieldName} cannot be empty.`
            ? ''
            : prevErrors[field],
      }))
    }
  }

  const isPasswordValid = () => {
    return isLengthValid && hasUpperCase && hasLowerCase && hasSymbol
  }

  const isPasswordMatch = useMemo(() => {
    const { password, confirmPassword } = formData
    const match =
      password === confirmPassword && password !== '' && confirmPassword !== ''

    if (match) {
      if (formErrors.confirmPassword !== '') {
        setFormErrors(prevErrors => ({
          ...prevErrors,
          confirmPassword: '',
        }))
      }
    } else {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        confirmPassword: 'The Password entered does not match.',
      }))
    }

    return match
  }, [formData.password, formData.confirmPassword, formErrors.confirmPassword])

  const isEmailExist = async () => {
    try {
      const emailExists = await checkEmail(formData.email)
      return emailExists
    } catch (error) {
      if (error.response && error.response.status === 200) {
        setFormErrors(prevErrors => ({
          ...prevErrors,
          email: 'Email already exists.',
        }))
        return true
      } else {
        console.error('Error checking email:', error)
        return false
      }
    }
  }

  const isNotEmpty = () => {
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.email !== '' &&
      formData.password !== '' &&
      formData.confirmPassword !== ''
    )
  }

  const isValid = () => {
    return isNotEmpty() && isChecked && isPasswordValid() && isPasswordMatch
  }

  return (
    <Box component='form' onSubmit={handleSignUp} className='form' noValidate>
      <InputLabel htmlFor='firstName'>First name</InputLabel>
      <FormControl>
        <TextField
          required
          id='firstName'
          name='firstName'
          autoFocus
          onChange={e => handleInputChange('firstName', e.target.value)}
          onBlur={() => {
            handleNameValidation('firstName')
            handleEmptyInput('firstName', 'First name')
          }}
          error={Boolean(formErrors.firstName)}
        />
        <FormHelperText>{formErrors.firstName}</FormHelperText>
      </FormControl>
      <InputLabel htmlFor='lastName'>Last name</InputLabel>
      <FormControl>
        <TextField
          required
          id='lastName'
          name='lastName'
          onChange={e => handleInputChange('lastName', e.target.value)}
          onBlur={() => {
            handleNameValidation('lastName')
            handleEmptyInput('lastName', 'Last name')
          }}
          error={Boolean(formErrors.lastName)}
        />
        <FormHelperText>{formErrors.lastName}</FormHelperText>
      </FormControl>
      <InputLabel htmlFor='email'>
        Email address (ex. jeanine@bootcampr.io)
      </InputLabel>
      <FormControl>
        <TextField
          required
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          onChange={e => handleInputChange('email', e.target.value)}
          onBlur={() => {
            handleEmailValidation()
            handleEmptyInput('email', 'Email')
          }}
          error={Boolean(formErrors.email)}
        />
        <FormHelperText>{formErrors.email}</FormHelperText>
      </FormControl>
      <InputLabel htmlFor='password'>
        Password (Minimum 8 characters, 1 uppercase, 1 lowercase, 1 symbol)
      </InputLabel>
      <FormControl>
        <OutlinedInput
          required
          name='password'
          id='password'
          autoComplete='current-password'
          type={passwordState.showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={e => handleInputChange('password', e.target.value)}
          onBlur={() => handleEmptyInput('password', 'Password')}
          error={Boolean(formErrors.password)}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleTogglePasswordVisibility}
                edge='end'
              >
                {passwordState.showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>{formErrors.password}</FormHelperText>
      </FormControl>
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
      <FormControl>
        <OutlinedInput
          required
          name='confirmPassword'
          id='confirmPassword'
          autoComplete='current-password'
          type={confirmPasswordState.showConfirmPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          onChange={e => handleInputChange('confirmPassword', e.target.value)}
          onBlur={() => {
            handleEmptyInput('confirmPassword', 'Confirm Password')
          }}
          error={Boolean(formErrors.confirmPassword)}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle confirm password visibility'
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
        <FormHelperText>{formErrors.confirmPassword}</FormHelperText>
      </FormControl>
      <FormControlLabel
        className='email-agreement checkbox-email-agreement'
        control={<Checkbox value='remember' onChange={handleCheckboxChange} />}
        label={emailNotificationAgreement}
      />
      <Button
        type='submit'
        className={isValid() ? 'submit-button-enabled' : ''}
        disabled={!isValid()}
      >
        Sign up
      </Button>
    </Box>
  )
}

export default SignUpForm
