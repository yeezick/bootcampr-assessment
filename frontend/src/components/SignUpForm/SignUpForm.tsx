import React, { useState, useEffect } from 'react'
import { FormField } from 'components/FormField/FormField'
import {
  FormControl,
  FormControlLabel,
  Button,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import './SignUpForm.scss'

type FormFieldInput = {
  firstName: string
  lastName: string
  email: string
  firstPassword: string
  secondPassword: string
}

type CustomFormProps = {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  values: Array<{
    label: string
    value: string
    type: string
  }>
  currentValue: string
}

export const SignUpForm: React.FC = (props: CustomFormProps) => {
  const [input, setInput] = useState<FormFieldInput>({
    firstName: '',
    lastName: '',
    email: '',
    firstPassword: '',
    secondPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  })
  const [validLength, setValidLength] = useState(false)
  const [hasNumber, setHasNumber] = useState(false)
  const [upperCase, setUpperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [match, setMatch] = useState(false)
  const [requiredLength, setRequiredLength] = useState(8)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // onSubmit(formFieldInput);
    console.log(input)
  }

  useEffect(() => {
    setValidLength(
      password.firstPassword.length >= requiredLength ? true : false
    )
    setUpperCase(
      password.firstPassword.toLowerCase() !== password.firstPassword
    )
    setLowerCase(
      password.firstPassword.toUpperCase() !== password.firstPassword
    )
    setHasNumber(/\d/.test(password.firstPassword))
    setMatch(
      !!password.firstPassword &&
        password.firstPassword === password.secondPassword
    )
    setSpecialChar(
      /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password.firstPassword)
    )
  }, [password, requiredLength])

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  return (
    <div className='form-input-container'>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormField
            changeHandler={handleChange}
            label={'First name'}
            name={'firstName'}
            value={input.firstName}
            type={'text'}
          />
          <FormField
            changeHandler={handleChange}
            label={'Last name'}
            name={'lastName'}
            value={input.lastName}
            type={'text'}
          />
          <FormField
            changeHandler={handleChange}
            label={'Email address (ex. jeanine@bootcampr.io)'}
            name={'email'}
            value={input.email}
            type={'text'}
          />
          <FormField
            changeHandler={handleChange}
            label={'Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)'}
            name={'firstPassword'}
            value={input.firstPassword}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormField
            changeHandler={handleChange}
            label={'Re-enter password'}
            name={'secondPassword'}
            value={input.secondPassword}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                  </InputAdornment>
              ),
            }}
          />
          <div className='agreement-container'>
            <div className='sign-up-agreement'>
              <FormControlLabel
                control={<Checkbox />}
                id='helper-text'
                label='I agree to receive email notification(s). We will only send
                emails with important information, like project start dates. We
                will not sell your information!'
              />
            </div>
          </div>
          <div className='form-button'>
            <Button type='submit'>Sign up</Button>
          </div>
        </FormControl>
      </form>
    </div>
  )
}
