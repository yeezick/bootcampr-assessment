import { useState, FC } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import './InputField.scss'
import { TextInput } from './TextInput'

interface PasswordInputProps {
  // value:
  // name:
  helperText?: string
  type: string
  label?: string
  text?: string
  onClick?: () => void
}

export const PasswordInput: FC<PasswordInputProps> = ({
  label,
  type,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  function handleTogglePasswordVisibility() {
    setShowPassword(!showPassword)
  }
  console.log(showPassword)
  const iconEnd = {
    endAdornment: (
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          onClick={handleTogglePasswordVisibility}
          edge='end'
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }
  return (
    <TextInput
      type={showPassword ? 'text' : 'password'}
      label={label}
      InputProps={iconEnd}
    />
  )
}
