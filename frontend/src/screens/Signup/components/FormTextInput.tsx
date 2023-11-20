import { useState } from 'react'
import { getUser } from 'utils/userController'
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

interface IFormEmailInputProps {
  name: string
  type?: string
  label: string
  value: string
  setEmailValid?: (value: boolean) => void
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormEmailInput: React.FC<IFormEmailInputProps> = (
  props: IFormEmailInputProps
) => {
  const { name, type, label, value, handleInputChange, setEmailValid } = props

  const inputProps = {
    disableUnderline: true,
    sx: { borderRadius: 1 },
  }

  const handleBlur = async () => {
    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (validEmailRegex.test(value)) {
      const response = await getUser(value)
      if (!response) {
        setEmailValid(true)
        return
      }
    }
    setEmailValid(false)
  }

  return (
    <div className='signup-form-text-input'>
      <label htmlFor={name}>{label}</label>
      <TextField
        type={type ? type : 'text'}
        value={value}
        onBlur={handleBlur}
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
  type?: string
  label: string
  value: string
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormTextInput: React.FC<IFormTextInputProps> = (
  props: IFormTextInputProps
) => {
  const { name, type, label, value, handleInputChange } = props

  const inputProps = {
    disableUnderline: true,
    sx: { borderRadius: 1 },
  }

  return (
    <div className='signup-form-text-input'>
      <label htmlFor={name}>{label}</label>
      <TextField
        type={type ? type : 'text'}
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

export { FormPWInput, FormTextInput, FormEmailInput }
