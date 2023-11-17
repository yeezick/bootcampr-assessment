import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  ErrorMessage,
  Field,
  FieldProps,
  Form,
  Formik,
  FormikHelpers,
} from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

type Values = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

// const inputStyles = {
//   // fontSize: '16px',
//   // fontWeight: '200',
// }

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .test('uppercase', 'Choose a stronger password', function (value) {
      return /[A-Z]/.test(value)
    })
    .test('lowercase', 'Choose a stronger password', function (value) {
      return /[a-z]/.test(value)
    })
    .test('number', 'Choose a stronger password', function (value) {
      return /\d/.test(value)
    })
    .test('minLength', 'Choose a stronger password', function (value) {
      return value.length >= 8
    }),
  confirmPassword: Yup.string()
    .required('Please re-enter your password')
    .matches(/[A-Z]/, 'Choose a stronger password')
    .matches(/[a-z]/, 'Choose a stronger password')
    .matches(/\d/, 'Choose a stronger password')
    .min(8)

    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

export default function SignUpForm() {
  const [agree, setAgree] = useState(false)
  const [show, setShow] = useState(false)
  const [didFocus, setDidFocus] = useState(false)

  const navigate = useNavigate()

  return (
    <VStack>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: Values, actions: FormikHelpers<Values>) => {
          const { confirmPassword, ...restValues } = values
          setTimeout(() => {
            alert(JSON.stringify(restValues, null, 2))
            navigate('/congrats')
            actions.setSubmitting(false)
            actions.resetForm()
          }, 500)
        }}
      >
        <Form>
          <Field name='firstName'>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.firstName && form.touched.firstName)}
                // sx={inputStyles}
              >
                <FormLabel htmlFor='firstName'>First name</FormLabel>
                <Input {...field} id='firstName' />
                <ErrorMessage name='firstName' />
              </FormControl>
            )}
          </Field>
          <Field name='lastName'>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.lastName && form.touched.lastName)}
                // sx={inputStyles}
              >
                <FormLabel htmlFor='lastName'>Last name</FormLabel>
                <Input {...field} id='lastName' />
                <ErrorMessage name='lastName' />
              </FormControl>
            )}
          </Field>
          <Field name='email'>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.email && form.touched.email)}
                // sx={inputStyles}
              >
                <FormLabel htmlFor='email'>
                  Email address (ex. jeanine@bootcampr.io)
                </FormLabel>
                <Input {...field} id='email' />
                <ErrorMessage name='email' />
              </FormControl>
            )}
          </Field>
          <Field name='password'>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.password && form.touched.password)}
                // sx={inputStyles}
              >
                <FormLabel htmlFor='email'>Password</FormLabel>
                <InputGroup>
                  <Input
                    {...field}
                    type={show ? 'text' : 'password'}
                    // onChange={e => {
                    //   form.setFieldValue('password', e.target.value)
                    // }}
                    onFocus={() => setDidFocus(true)}
                  />
                  <InputRightElement>
                    <Button background='none' onClick={() => setShow(!show)}>
                      {show ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name='password' />

                <Box>
                  <Text
                    color={
                      !didFocus
                        ? 'black'
                        : /[A-Z]/.test(field.value)
                        ? '#23A6A1'
                        : '#D90000'
                    }
                  >
                    1 uppercase
                  </Text>
                  <Text
                    color={
                      !didFocus
                        ? 'black'
                        : /[a-z]/.test(field.value)
                        ? '#23A6A1'
                        : '#D90000'
                    }
                  >
                    1 lowercase
                  </Text>
                  <Text
                    color={
                      !didFocus
                        ? 'black'
                        : /\d/.test(field.value)
                        ? '#23A6A1'
                        : '#D90000'
                    }
                  >
                    1 number
                  </Text>
                  <Text
                    color={
                      !didFocus
                        ? 'black'
                        : field.value.length >= 8
                        ? '#23A6A1'
                        : '#D90000'
                    }
                  >
                    Minimum 8 characters
                  </Text>
                </Box>
              </FormControl>
            )}
          </Field>

          <Field name='confirmPassword'>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={
                  !!(
                    form.errors.confirmPassword && form.touched.confirmPassword
                  )
                }
                // sx={inputStyles}
              >
                <FormLabel htmlFor='email'>Re-enter password</FormLabel>
                <InputGroup>
                  <Input {...field} type={show ? 'text' : 'password'} />
                  <InputRightElement>
                    <Button background='none' onClick={() => setShow(!show)}>
                      {show ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name='confirmPassword' />
                {form.touched.confirmPassword &&
                  !form.errors.confirmPassword &&
                  form.values.password === form.values.confirmPassword && (
                    <Text style={{ color: '#23A6A1' }}>Passwords match!</Text>
                  )}
              </FormControl>
            )}
          </Field>
          <HStack alignItems='flex-start'>
            <Checkbox
              isChecked={agree}
              pt={1}
              onChange={e => setAgree(e.target.checked)}
            />
            <Text ml={4} fontSize='14px'>
              I agree to receive email notification(s). We will only send emails
              with important information, like project start dates. We will not
              sell your information!
            </Text>
          </HStack>
          <Button
            type='submit'
            isDisabled={!agree}
            sx={{
              backgroundColor: agree ? '#EC993B' : '#ECEBEB',
              color: 'black',
            }}
          >
            Sign up
          </Button>
          {/* //TODO remove before submitting */}
          <Button type='reset' onClick={() => setDidFocus(false)}>
            Reset
          </Button>
        </Form>
      </Formik>
    </VStack>
  )
}
