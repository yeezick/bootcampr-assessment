import {
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
  const [showPasswordHints, setShowPasswordHints] = useState(true)

  const navigate = useNavigate()

  const handleCheck = isValid => {
    setAgree(!agree)
    if (isValid) {
      setShowPasswordHints(!showPasswordHints)
    }
  }

  return (
    <VStack>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        initialErrors={{ firstName: '' }} // Just to set isValid to false initially
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
        {({ isValid, isSubmitting }) => (
          <Form>
            <Field name='firstName'>
              {({ field, form }: FieldProps) => (
                <FormControl
                  mb={5}
                  isInvalid={
                    !!(form.errors.firstName && form.touched.firstName)
                  }
                >
                  <FormLabel htmlFor='firstName' fontWeight={'normal'} m={0}>
                    First name
                  </FormLabel>
                  <Input
                    {...field}
                    id='firstName'
                    bg={'#ECEBEB'}
                    onFocus={() => form.setFieldTouched('firstName')}
                  />
                  <Text color={'red'}>
                    <ErrorMessage name='firstName' />
                  </Text>
                </FormControl>
              )}
            </Field>

            <Field name='lastName'>
              {({ field, form }: FieldProps) => (
                <FormControl
                  mb={5}
                  isInvalid={!!(form.errors.lastName && form.touched.lastName)}
                >
                  <FormLabel htmlFor='lastName' fontWeight={'normal'} m={0}>
                    Last name
                  </FormLabel>
                  <Input
                    {...field}
                    id='lastName'
                    bg={'#ECEBEB'}
                    onFocus={() => form.setFieldTouched('lastName')}
                  />
                  <Text color={'red'}>
                    <ErrorMessage name='lastName' />
                  </Text>
                </FormControl>
              )}
            </Field>

            <Field name='email'>
              {({ field, form }: FieldProps) => (
                <FormControl
                  mb={5}
                  isInvalid={!!(form.errors.email && form.touched.email)}
                >
                  <FormLabel htmlFor='email' fontWeight={'normal'} m={0}>
                    Email address (ex. jeanine@bootcampr.io)
                  </FormLabel>
                  <Input
                    {...field}
                    id='email'
                    bg={'#ECEBEB'}
                    onFocus={() => form.setFieldTouched('email')}
                  />
                  <Text color={'red'}>
                    <ErrorMessage name='email' />
                  </Text>
                </FormControl>
              )}
            </Field>

            <Field name='password'>
              {({ field, form }: FieldProps) => (
                <FormControl
                  mb={5}
                  isInvalid={!!(form.errors.password && form.touched.password)}
                >
                  <FormLabel htmlFor='email' fontWeight={'normal'} m={0}>
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      type={show ? 'text' : 'password'}
                      bg={'#ECEBEB'}
                      onFocus={() => form.setFieldTouched('password')}
                    />
                    <InputRightElement>
                      <Button
                        background='none'
                        _hover={{ background: 'none' }}
                        onClick={() => setShow(!show)}
                      >
                        {show ? <VisibilityOff /> : <Visibility />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Text color={'red'}>
                    <ErrorMessage name='password' />
                  </Text>

                  {showPasswordHints ? (
                    <VStack
                      fontSize={'12px'}
                      align={'start'}
                      spacing={1}
                      mt={1}
                    >
                      <Text
                        color={
                          !form.touched.password
                            ? 'black'
                            : /[A-Z]/.test(field.value)
                            ? '#23A6A1'
                            : '#D90000'
                        }
                      >
                        {/[A-Z]/.test(field.value) ? (
                          <span>&#10003;</span>
                        ) : null}
                        1 uppercase
                      </Text>
                      <Text
                        color={
                          !form.touched.password
                            ? 'black'
                            : /[a-z]/.test(field.value)
                            ? '#23A6A1'
                            : '#D90000'
                        }
                      >
                        {/[a-z]/.test(field.value) ? (
                          <span>&#10003;</span>
                        ) : null}
                        1 lowercase
                      </Text>
                      <Text
                        color={
                          !form.touched.password
                            ? 'black'
                            : /\d/.test(field.value)
                            ? '#23A6A1'
                            : '#D90000'
                        }
                      >
                        {/\d/.test(field.value) ? <span>&#10003;</span> : null}{' '}
                        1 number
                      </Text>
                      <Text
                        color={
                          !form.touched.password
                            ? 'black'
                            : field.value.length >= 8
                            ? '#23A6A1'
                            : '#D90000'
                        }
                      >
                        {field.value.length >= 8 ? <span>&#10003;</span> : null}
                        Minimum 8 characters
                      </Text>
                    </VStack>
                  ) : null}
                </FormControl>
              )}
            </Field>

            <Field name='confirmPassword'>
              {({ field, form }: FieldProps) => (
                <FormControl
                  mb={5}
                  isInvalid={
                    !!(
                      form.errors.confirmPassword &&
                      form.touched.confirmPassword
                    )
                  }
                >
                  <FormLabel htmlFor='email' fontWeight={'normal'} m={0}>
                    Re-enter password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      type={show ? 'text' : 'password'}
                      bg={'#ECEBEB'}
                      onFocus={() => form.setFieldTouched('confirmPassword')}
                    />
                    <InputRightElement>
                      <Button
                        background='none'
                        _hover={{ background: 'none' }}
                        onClick={() => setShow(!show)}
                      >
                        {show ? <VisibilityOff /> : <Visibility />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Text color={'red'}>
                    <ErrorMessage name='confirmPassword' />
                  </Text>

                  {showPasswordHints &&
                    form.touched.confirmPassword &&
                    !form.errors.confirmPassword &&
                    form.values.password === form.values.confirmPassword && (
                      <Text color={'#23A6A1'} fontSize={'12px'}>
                        Passwords match!
                      </Text>
                    )}
                </FormControl>
              )}
            </Field>

            <HStack alignItems='flex-start' mb={5}>
              <Checkbox
                isChecked={agree}
                pt={1}
                onChange={() => handleCheck(isValid)}
              />
              <Text ml={4} mr={8} fontSize='14px'>
                I agree to receive email notification(s). We will only send
                emails with important information, like project start dates. We
                will not sell your information!
              </Text>
            </HStack>

            <Button
              type='submit'
              isLoading={isSubmitting}
              isDisabled={!agree || !isValid}
              // _disabled={{ opacity: 1, cursor: 'not-allowed' }} //matches design but impacts UX
              backgroundColor={agree && isValid ? '#EC993B' : '#ECEBEB'}
              _hover={{ background: agree && isValid ? '#EC993B' : '#ECEBEB' }}
              width={'448px'}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </VStack>
  )
}
