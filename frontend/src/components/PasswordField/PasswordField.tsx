import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import './PasswordField.scss'

interface InputProps {
  label: string
  type: string
  identifier: string
}

const PasswordField: React.FC<InputProps> = props => {
  // const [errorMessage, setErrorMessage] = useState<string>('false')
  // const [inputValid, setInputValid] = useState<boolean>(true)
  // const [validityState, setValidityState] = useState<boolean>(true)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const handlePasswordVisibility = () => {
    setPasswordVisible(passwordVisible => !passwordVisible)
  }

  // useEffect(() => {
  //   // Custom Validity Logic
  //   if (validityState) {
  //     setErrorMessage(`'${props.label}' is required.`)
  //   }
  // }, [validityState])

  // const handleValidity = e => {
  //   setValidityState(e.target.validity.valueMissing)
  //   setInputValid(e.target.checkValidity())
  // }

  return (
    <label htmlFor={props.identifier}>
      <p>{props.label}</p>
      <div className='password-field'>
        <input
          id={props.identifier}
          type={passwordVisible ? 'text' : 'password'}
          pattern='^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$'
          required
        />
        <IconButton
          title='Toggle Password Visibility'
          onClick={handlePasswordVisibility}
          aria-label={passwordVisible ? 'Hide Password' : 'Show Password'}
        >
          {passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </div>
      <p className='password-error-message error-message'>
        <span className='password-length-validity'>Minimum 8 Characters</span>
        <span className='password-uppercase-validity'>
          1 Uppercase Character
        </span>
        <span className='password-lowercase-validity'>
          1 Lowercase Character
        </span>
        <span className='password-symbol-validity'>1 Symbol</span>
      </p>
    </label>
  )
}

export default PasswordField
