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
import { createUser } from 'utils/userController'
import { validationSchema } from './validationSchema'
import SubmitButton from './SubmitButton'
import ConsentCheckbox from './ConsentCheckbox'
import SimpleInput from './SimpleInput'
import PasswordInput from './PasswordInput'

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

export default function SignUpForm() {
  const [agree, setAgree] = useState(false)
  const [show, setShow] = useState(false)
  const [showPasswordHints, setShowPasswordHints] = useState(true)

  const navigate = useNavigate()

  return (
    <VStack>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        initialErrors={{ firstName: '' }} // Just to set isValid to false initially
        onSubmit={async (values: Values, actions: FormikHelpers<Values>) => {
          const { confirmPassword, ...restValues } = values
          try {
            actions.setSubmitting(true)
            await createUser(restValues)
            navigate('/congrats')
            console.log(values)
            actions.resetForm()
            actions.setSubmitting(false)
          } catch (error) {
            console.error(error)
          }
          // setTimeout(() => {
          //   // alert(JSON.stringify(restValues, null, 2))
          // }, 500)
        }}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <SimpleInput inputName={'firstName'} />

            <SimpleInput inputName={'lastName'} />

            <SimpleInput inputName={'email'} />

            <PasswordInput
              show={show}
              setShow={setShow}
              showPasswordHints={showPasswordHints}
            />

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

            <ConsentCheckbox
              agree={agree}
              setAgree={setAgree}
              showPasswordHints={showPasswordHints}
              setShowPasswordHints={setShowPasswordHints}
              isValid={isValid}
            >
              I agree to receive email notification(s). We will only send emails
              with important information, like project start dates. We will not
              sell your information!
            </ConsentCheckbox>

            <SubmitButton
              isSubmitting={isSubmitting}
              agree={agree}
              isValid={isValid}
            >
              Sign up
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </VStack>
  )
}
