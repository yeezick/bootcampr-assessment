import React, { useState } from 'react'
import { FormField }  from 'components/FormField/FormField'
import { FormControl, FormHelperText, Button, Checkbox } from '@mui/material'
import './SignUpForm.scss'

type FormFieldInput = {
  firstName: string
  lastName: string
  email: string
  password: string
}

type CustomFormProps = {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  values : Array<{
    label : string, 
    value : string,
    type: string}>,
  currentValue : string
}

export const SignUpForm: React.FC = (props: CustomFormProps) => {
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

  return (
    <FormControl >
      <FormField changeHandler={handleChange} label={"First Name"} name={"firstName"} value={"firstName"} type={"text"} />
      <FormField changeHandler={handleChange} label={"Last Name"} name={"lastName"} value={"lastName"} type={"text"} />
      <FormField changeHandler={handleChange} label={"Email"} name={"email"} value={"email"} type={"text"} />
      <FormField changeHandler={handleChange} label={"Password"} name={"password"} value={"password"} type={"text"} />
      <Checkbox />
      <FormHelperText id='my-helper-text'>
      I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!
      </FormHelperText>
      <Button type="submit">Sign up</Button>
    </FormControl>
  )
}
