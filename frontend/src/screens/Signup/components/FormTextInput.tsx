import { useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface IFormPWInputProps {
  name: string
  label: string
  value: string
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormPWInput: React.FC<IFormPWInputProps> = (props: IFormPWInputProps) => {
  const { name, label, value, handleInputChange } = props

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
    <div className='signup-form-text-input'>
      <label htmlFor={name}>{label}</label>
      <TextField
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={handleInputChange}
        hiddenLabel
        name={name}
        id={name}
        variant='filled'
        size='small'
        InputProps={inputProps}
      />
    </div>
  )
}

interface IFormTextInputProps {
  name: string
  label: string
  value: string
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormTextInput: React.FC<IFormTextInputProps> = (
  props: IFormTextInputProps
) => {
  const { name, label, value, handleInputChange } = props

  const inputProps = {
    disableUnderline: true,
    sx: { borderRadius: 1 },
  }

  return (
    <div className='signup-form-text-input'>
      <label htmlFor={name}>{label}</label>
      <TextField
        type='text'
        value={value}
        onChange={handleInputChange}
        hiddenLabel
        name={name}
        id={name}
        variant='filled'
        size='small'
        InputProps={inputProps}
      />
    </div>
  )
}

export { FormPWInput, FormTextInput }
