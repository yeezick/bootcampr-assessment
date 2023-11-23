import { Form, Formik, FormikHelpers } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from 'utils/userController'
import { validationSchema } from './validationSchema'
import SubmitButton from './SubmitButton'
import ConsentCheckbox from './ConsentCheckbox'
import SimpleInput from './SimpleInput'
import PasswordInput from './PasswordInput'
import EmailInput from './EmailInput'

export type User = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword?: string
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
  const [hasAccount, setHasAccount] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (user: User, actions: FormikHelpers<User>) => {
    try {
      const { confirmPassword, ...restUser } = user
      await createUser(restUser)
      navigate('/congrats')
      actions.resetForm()
      actions.setSubmitting(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={true}
      initialErrors={{ firstName: '' }} // Just to set isValid to false initially
      onSubmit={onSubmit}
    >
      {({ isValid, isSubmitting }) => (
        <Form role='form' aria-label='Signup Form'>
          <SimpleInput inputName={'firstName'}>First name</SimpleInput>

          <SimpleInput inputName={'lastName'}>Last name</SimpleInput>

          <EmailInput hasAccount={hasAccount} setHasAccount={setHasAccount}>
            Email address (ex. jeanine@bootcampr.io)
          </EmailInput>

          <PasswordInput
            inputName={'password'}
            show={show}
            setShow={setShow}
            showPasswordHints={showPasswordHints}
          >
            Password
          </PasswordInput>

          <PasswordInput
            inputName={'confirmPassword'}
            show={show}
            setShow={setShow}
            showPasswordHints={showPasswordHints}
          >
            Re-enter password
          </PasswordInput>

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
  )
}
