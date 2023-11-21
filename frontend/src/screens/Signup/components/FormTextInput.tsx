import { useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface IFormTextInputProps {
  name: string
  type?: string
  label: string
  value: string
  inputProps?: { [key: string]: any }
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormTextInput: React.FC<IFormTextInputProps> = (
  props: IFormTextInputProps
) => {
  const {
    name,
    type,
    label,
    value,
    inputProps,
    handleBlur,
    handleInputChange,
  } = props

  const defaultInputProps = {
    disableUnderline: true,
    sx: { borderRadius: 1 },
  }

  return (
    <div className='signup-form-text-input'>
      <label htmlFor={name}>{label}</label>
      <TextField
        type={type ? type : 'text'}
        value={value}
        onBlur={handleBlur && handleBlur}
        onChange={handleInputChange && handleInputChange}
        hiddenLabel
        name={name}
        id={name}
        variant='filled'
        size='small'
        InputProps={
          inputProps
            ? { ...defaultInputProps, ...inputProps }
            : defaultInputProps
        }
      />
    </div>
  )
}

const FormPWInput: React.FC<IFormTextInputProps> = (
  props: IFormTextInputProps
) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const inputProps = {
    disableUnderline: true,
    sx: { borderRadius: 1 },
    endAdornment: (
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge='end'
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }

  return (
    <FormTextInput
      {...props}
      inputProps={inputProps}
      type={showPassword ? 'text' : 'password'}
    />
  )
}

const FormEmailInput: React.FC<IFormTextInputProps> = (
  props: IFormTextInputProps
) => {
  return <FormTextInput {...props} type='email' />
}

export { FormPWInput, FormTextInput, FormEmailInput }
