import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from '@mui/material'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

type Values = {
  firstName: string
  lastName: string
  email: string
  password: string
  reenterPassword: string
}

export default function SignUpForm() {
  const [agree, setAgree] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)

  const handleCheckboxChange = () => {
    setAgree(!agree)
  }

  const handleShowPassword = () => {
    setShow(!show)
  }

  return (
    <Stack>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          reenterPassword: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 500)
        }}
      >
        <Form>
          <InputLabel htmlFor='firstName'>First Name</InputLabel>
          <Field
            as={TextField}
            id='firstName'
            name='firstName'
            variant='filled'
            margin='normal'
            fullWidth
          />

          <InputLabel htmlFor='lastName'>Last Name</InputLabel>
          <Field
            as={TextField}
            id='lastName'
            name='lastName'
            variant='filled'
            margin='normal'
            fullWidth
          />

          <InputLabel htmlFor='email'>
            Email address (ex. jeanine@bootcampr.io)
          </InputLabel>
          <Field
            as={TextField}
            id='email'
            name='email'
            variant='filled'
            margin='normal'
            fullWidth
          />

          <InputLabel htmlFor='password'>Password</InputLabel>
          <Field
            as={TextField}
            id='password'
            name='password'
            type={show ? 'text' : 'password'}
            variant='filled'
            margin='normal'
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPassword} edge='end'>
                    {show ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <InputLabel htmlFor='reenterPassword'>Re-enter password</InputLabel>
          <Field
            as={TextField}
            id='reenterPassword'
            name='reenterPassword'
            type={show ? 'text' : 'password'}
            variant='filled'
            margin='normal'
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPassword} edge='end'>
                    {show ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={
              <Checkbox checked={agree} onChange={handleCheckboxChange} />
            }
            label='I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!'
          />

          <Button
            type='submit'
            disabled={!agree}
            sx={{
              backgroundColor: agree ? '#EC993B' : '#ECEBEB',
              color: 'black',
              textTransform: 'none',
            }}
          >
            Sign up
          </Button>
        </Form>
      </Formik>
    </Stack>
  )
}
