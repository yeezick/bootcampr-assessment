import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import styles from './PasswordField.module.scss'

interface InputProps {
  label: string
  type: string
  identifier: string
}

const PASSWORD_LENGTH_REGEX = /^.*(?=.{8,})/
const PASSWORD_UPPERCASE_REGEX = /[A-Z]/
const PASSWORD_LOWERCASE_REGEX = /[a-z]/
const PASSWORD_SYMBOL_REGEX = /[!#$%&?@ "]/

const PasswordField: React.FC<InputProps> = props => {
  const [isValidLength, setIsValidLength] = useState(null)
  const [isValidUppercaseCount, setIsValidUppercaseCount] = useState(null)
  const [isValidLowercaseCount, setIsValidLowercaseCount] = useState(null)
  const [isValidSymbolCount, setIsValidSymbolCount] = useState(null)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const handlePasswordVisibility = () => {
    setPasswordVisible(passwordVisible => !passwordVisible)
  }

  const handleValidity = e => {
    const passwordEntry = e.target.value

    setIsValidLength(PASSWORD_LENGTH_REGEX.test(passwordEntry))
    setIsValidUppercaseCount(PASSWORD_UPPERCASE_REGEX.test(passwordEntry))
    setIsValidLowercaseCount(PASSWORD_LOWERCASE_REGEX.test(passwordEntry))
    setIsValidSymbolCount(PASSWORD_SYMBOL_REGEX.test(passwordEntry))
  }

  return (
    <label htmlFor={props.identifier} className={styles['password-field']}>
      <p>{props.label}</p>
      <div className={styles['password-input-field']}>
        <input
          id={props.identifier}
          type={passwordVisible ? 'text' : 'password'}
          onBlur={handleValidity}
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
      <p className={styles['validation']}>
        <span
          className={
            isValidLength !== null &&
            (isValidLength ? styles['valid'] : styles['invalid'])
          }
        >
          Minimum 8 Characters
        </span>
        <span
          className={
            isValidUppercaseCount !== null &&
            (isValidUppercaseCount ? styles['valid'] : styles['invalid'])
          }
        >
          1 Uppercase Character
        </span>
        <span
          className={
            isValidLowercaseCount !== null &&
            (isValidLowercaseCount ? styles['valid'] : styles['invalid'])
          }
        >
          1 Lowercase Character
        </span>
        <span
          className={
            isValidSymbolCount !== null &&
            (isValidSymbolCount ? styles['valid'] : styles['invalid'])
          }
        >
          1 Symbol
        </span>
      </p>
    </label>
  )
}

export default PasswordField
