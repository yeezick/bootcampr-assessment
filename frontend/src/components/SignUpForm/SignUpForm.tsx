import React, { useState } from 'react'
import { FormField } from 'components/FormField/FormField'
import {
  FormControl,
  FormHelperText,
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
  password: string
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
  const [showPassword, setShowPassword] = useState(false)
  const [input, setInput] = useState<FormFieldInput>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // onSubmit(formFieldInput);
    console.log(input)
  }

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  return (
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
          name={''}
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
          label={'Password'}
          name={'password'}
          value={input.password}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
        />
        <Checkbox />
        <FormHelperText id='my-helper-text'>
          I agree to receive email notification(s). We will only send emails
          with important information, like project start dates. We will not sell
          your information!
        </FormHelperText>
        <Button type='submit'>Sign up</Button>
      </FormControl>
    </form>
  )
}
