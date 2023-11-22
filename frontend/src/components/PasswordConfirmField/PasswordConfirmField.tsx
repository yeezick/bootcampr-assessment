import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import styles from './PasswordConfirmField.module.scss'

interface InputProps {
  label: string
  type: string
  identifier: string
  passwordMatch: boolean
  setPasswordValue: Function
}

const PasswordConfirmField: React.FC<InputProps> = props => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const handlePasswordVisibility = () => {
    setPasswordVisible(passwordVisible => !passwordVisible)
  }

  return (
    <label htmlFor={props.identifier} className={styles['password-field']}>
      <p className={styles.label}>{props.label}</p>
      <div className={styles['password-input-field']}>
        <input
          id={props.identifier}
          type={passwordVisible ? 'text' : 'password'}
          onChange={e => props.setPasswordValue(e.target.value)}
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
      <p
        className={`${styles['validation']} ${
          props.passwordMatch === null
            ? styles['neutral']
            : props.passwordMatch
            ? styles['valid']
            : styles['invalid']
        }`}
      >
        {props.passwordMatch !== null && props.passwordMatch
          ? 'Password Matches!'
          : "Password Doesn't Match!"}
      </p>
    </label>
  )
}

export default PasswordConfirmField
