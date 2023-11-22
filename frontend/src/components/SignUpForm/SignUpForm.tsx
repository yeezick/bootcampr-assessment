import { useState, FC, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkRule } from 'utils/validationHelpers'

import { CustomButton } from '../../components/Button/CustomButton'
import { TextInput } from '../../components/Inputs/TextInput'
import { PasswordInput } from 'components/Inputs/PasswordInput'
import { CheckboxControl } from 'components/Inputs/Checkbox'
import { User } from '../../interfaces'
import './SignUpForm.scss'
import { checkEmailExist, createUser } from 'service/userService'

interface HelperText {
  error: boolean
  message: string
}

export const SignUpForm: FC = () => {
  const navigate = useNavigate()
  const agreementText =
    'I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information'

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    consent: false,
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState<HelperText[]>([])
  const [passwordValidations, setPasswordValidations] = useState<HelperText[]>(
    []
  )
  const [emailValidation, setEmailValidation] = useState<HelperText[]>([])

  const getPasswordHelperTexts = (password: string) => {
    const hasLowercase = /[a-z]/.test(password)
    const hasUppercase = /[A-Z]/.test(password)
    const hasNumber = /\d/.test(password)
    const minLength = password.length > 8
    const rules = [
      checkRule(hasUppercase, '1 uppercase'),
      checkRule(hasLowercase, '1 lowercase'),
      checkRule(hasNumber, '1 number'),
      checkRule(minLength, 'Minimum 8 characters'),
    ]
    return rules
  }
  //TODO: check if there is better way to do it
  const isFormValid = () => {
    const areFieldsFilled = Object.values(user).every(value => {
      if (typeof value === 'boolean') {
        return value !== false
      }
      return value.length > 0
    })
    const isPasswordValid = passwordsMatch.every(value => value.error === false)
    const isPasswordMatch = passwordValidations.every(
      value => value.error === false
    )
    const isEmailUnique = emailValidation.every(value => value.error === false)
    return (
      isPasswordValid && isPasswordMatch && areFieldsFilled && isEmailUnique
    )
  }
  const handleConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setConfirmPassword(value)
  }
  //TODO if user click checkbox after this, it jumps because of the helper text
  const handleValidatePasswordOnBlur = () => {
    const isPasswordSame = confirmPassword === user.password
    const message = isPasswordSame ? 'passwords match' : "passwords don't match"
    setPasswordsMatch([checkRule(isPasswordSame, message)])
  }
  const handleEmailOnBlur = () => {
    //TODO check email format is correct
    checkEmailExist(user).then(data => {
      const isEmailUnique = !data.exists
      //Need to send false to get an error to the checkRule function
      const message = isEmailUnique
        ? 'Email is available'
        : 'Email already exists'
      setEmailValidation([checkRule(isEmailUnique, message)])
    })
  }
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    if (type === 'checkbox') {
      setUser(prev => ({ ...prev, [name]: checked }))
    } else {
      if (name === 'password') {
        const passwordHelperTexts = getPasswordHelperTexts(value)
        setPasswordValidations(passwordHelperTexts)
      }
      setUser({ ...user, [name]: value })
    }
  }

  const handleFormSubmitButton = (event: FormEvent) => {
    event.preventDefault()
    createUser(user).then(() => {
      navigate('/welcome')
    })
  }

  return (
    <form className='signup-form'>
      <TextInput
        required
        label='First Name'
        name='firstName'
        type='text'
        value={user.firstName}
        onChange={handleChangeInput}
      />
      <TextInput
        required
        label='Last Name'
        name='lastName'
        value={user.lastName}
        type='text'
        onChange={handleChangeInput}
      />
      <TextInput
        required
        label='Email address (ex. jeanine@bootcampr.io)'
        type='email'
        name='email'
        value={user.email}
        onBlur={handleEmailOnBlur}
        helperText={emailValidation}
        onChange={handleChangeInput}
      />
      <PasswordInput
        label='Password (Min 8 characters, 1 upper, 1 lower, 1 number)'
        value={user.password}
        name='password'
        helperTexts={passwordValidations}
        onChange={handleChangeInput}
      />
      <PasswordInput
        label='Re-enter Password'
        value={confirmPassword}
        name='confirmPassword'
        onBlur={handleValidatePasswordOnBlur}
        helperTexts={passwordsMatch}
        onChange={handleConfirmPassword}
      />
      <CheckboxControl
        label={agreementText}
        onChange={handleChangeInput}
        name='consent'
      />

      <CustomButton
        onClick={handleFormSubmitButton}
        text='Sign up'
        disabled={!isFormValid()}
      />
    </form>
  )
}
