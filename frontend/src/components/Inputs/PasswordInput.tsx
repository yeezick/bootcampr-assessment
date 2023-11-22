import { useState, FC, ChangeEvent, FocusEvent } from 'react'
import { InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import './InputField.scss'
import { TextInput } from './TextInput'

interface PasswordInputProps {
  helperTexts?: {
    error: boolean
    message: string
  }[]
  value: string
  name: string
  label?: string
  text?: string
  onClick?: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
}

export const PasswordInput: FC<PasswordInputProps> = ({
  label,
  name,
  onChange,
  onBlur,
  value,
  helperTexts,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  function handleTogglePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  const iconEnd = {
    endAdornment: (
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          onClick={handleTogglePasswordVisibility}
          edge='end'
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ),
  }
  return (
    <TextInput
      type={showPassword ? 'text' : 'password'}
      value={value}
      name={name}
      label={label}
      InputProps={iconEnd}
      helperText={helperTexts}
      onChange={onChange}
      onBlur={onBlur}
      required
    />
  )
}
