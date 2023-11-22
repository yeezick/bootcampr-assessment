import { useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl'
import checkIcon from '../../assets/checkIcon.svg'
import './Form.scss'

export const Form: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [check, setCheck] = useState(false)

  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(firstName, lastName, email, password, rePassword, check)
  }

  const PasswordValidation = () => {
    // Password contains 1 uppercase letter
    const uppercaseRegex = /[A-Z]/
    const isUppercaseValid = uppercaseRegex.test(password)

    // Password contains 1 lowercase letter
    const lowercaseRegex = /[a-z]/
    const isLowercaseValid = lowercaseRegex.test(password)

    // Password contains 1 number
    const numberRegex = /\d/
    const isNumberValid = numberRegex.test(password)

    // Password contains minimum 8 characters
    const isLengthValid = password.length >= 8

    return !password ? (
      <div className='password-validator'>
        <p className='validate validate--gray'>1 uppercase</p>
        <p className='validate validate--gray'>1 lowercase</p>
        <p className='validate validate--gray'>1 number</p>
        <p className='validate validate--gray'>Minimum 8 characters</p>
      </div>
    ) : (
      <div>
        {isUppercaseValid ? (
          <div className='validate-container'>
            <img src={checkIcon} alt='check icon' />
            <p className='validate validate--true'>1 uppercase</p>
          </div>
        ) : (
          <p
            className='validate validate--false
        '
          >
            1 uppercase
          </p>
        )}
        {isLowercaseValid ? (
          <div className='validate-container'>
            <img src={checkIcon} alt='check icon' />
            <p className='validate validate--true'>1 lowercase</p>
          </div>
        ) : (
          <p
            className='validate validate--false
        '
          >
            1 lowercase
          </p>
        )}
        {isNumberValid ? (
          <div className='validate-container'>
            <img src={checkIcon} alt='check icon' />
            <p className='validate validate--true'>1 number</p>
          </div>
        ) : (
          <p
            className='validate validate--false
        '
          >
            1 number
          </p>
        )}
        {isLengthValid ? (
          <div className='validate-container'>
            <img src={checkIcon} alt='check icon' />
            <p className='validate validate--true'>Minimum 8 characters</p>
          </div>
        ) : (
          <p
            className='validate validate--false
        '
          >
            Minimum 8 characters
          </p>
        )}
      </div>
    )
  }

  const formFilled =
    firstName &&
    lastName &&
    email &&
    password &&
    rePassword &&
    password === rePassword &&
    check

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First name</label>
      <input
        type='text'
        id='firstName'
        className='form__input
        '
        onChange={e => setFirstName(e.target.value)}
      />
      <label htmlFor='lastName'>Last name</label>
      <input
        type='text'
        id='lastName'
        className='form__input
        '
        onChange={e => setLastName(e.target.value)}
      />
      <label htmlFor='email'>
        {' '}
        Email address{' '}
        <span className='label--gray'> &#40;ex. jeanine@bootcampr.io&#41;</span>
      </label>
      <input
        type='text'
        id='email'
        className='form__input
        '
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        className='form__input
        '
        onChange={e => setPassword(e.target.value)}
      />
      {!formFilled && <PasswordValidation />}
      <label htmlFor='rePassword'>Re-enter password</label>
      <input
        type='password'
        id='rePassword'
        className='form__input
        '
        onChange={e => setRePassword(e.target.value)}
      />
      {!formFilled && password && password === rePassword && (
        <p className='validate validate--true'>Passwords Match!</p>
      )}
      <div className='form__checkbox'>
        <input
          type='checkbox'
          id='rePassword'
          className='form__input
        '
          onChange={e => setCheck(e.target.checked)}
        />
        <p>
          I agree to receive email notification(s). We will only send emails
          with important information, like project start dates. We will not sell
          your information!
        </p>
      </div>
      <button
        type='submit'
        className={
          !formFilled ? 'form__submit' : 'form__submit form__submit--filled'
        }
      >
        Sign up
      </button>
    </form>
  )
}
