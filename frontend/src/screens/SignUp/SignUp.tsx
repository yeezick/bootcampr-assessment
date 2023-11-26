import './SignUp.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import signUpImage from 'assets/signupimg.svg'

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  hasUpperCase: boolean
  hasLowerCase: boolean
  hasSymbol: boolean
}

export const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormData>({ mode: 'onChange' })

  const [showMatchMessage, setShowMatchMessage] = useState(false)

  const passwordValue = watch('password')

  useEffect(() => {
    // Update conditions based on the current password value
    setValue('hasUpperCase', /[A-Z]/.test(passwordValue))
    setValue('hasLowerCase', /[a-z]/.test(passwordValue))
    setValue('hasSymbol', /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue))
  }, [passwordValue, setValue])

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPasswordValue = e.target.value

    setValue('password', newPasswordValue, {
      shouldValidate: true,
      shouldDirty: true,
    })
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPasswordValue = e.target.value

    setValue('confirmPassword', newConfirmPasswordValue, {
      shouldValidate: true,
      shouldDirty: true,
    })

    setShowMatchMessage(newConfirmPasswordValue === passwordValue)

    // Set a timeout to hide the message after 3 seconds
    setTimeout(() => {
      setShowMatchMessage(false)
    }, 4000)
  }
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormData> = data => {
    // Add your signup logic here
    console.log('Form submitted:', data)
    navigate('/success')
  }

  return (
    <div className='container'>
      <div className='text-container'>
        <h2>Join Bootcampr today.</h2>
        <h4>Get the experience. Get the job. </h4>
      </div>

      <div className='signup-container'>
        <img src={signUpImage} alt='register' />

        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
          <label>
            First Name
            <input
              {...register('firstName', { required: 'This field is required' })}
            />
          </label>

          <label>
            Last Name
            <input
              {...register('lastName', { required: 'This field is required' })}
            />
          </label>

          <label>
            Email address (ex. jeanine@bootcampr.io)
            <input
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </label>
          {errors.email && (
            <p className='error-message'>{`${errors.email.message}`}</p>
          )}

          <label>
            Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)
            <input
              {...register('password', {
                required: '',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                validate: {
                  hasUpperCase: value => /[A-Z]/.test(value) || '',
                  hasLowerCase: value => /[a-z]/.test(value) || '',
                  hasSymbol: value =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) || '',
                },
              })}
              type='password'
              onChange={handlePasswordChange}
            />
          </label>
          {errors.password && (
            <div className='error-messages'>
              <p
                className={
                  watch('hasUpperCase')
                    ? 'valid-condition'
                    : 'invalid-condition'
                }
              >
                1 uppercase
              </p>
              <p
                className={
                  watch('hasLowerCase')
                    ? 'valid-condition'
                    : 'invalid-condition'
                }
              >
                1 lowercase
              </p>
              <p
                className={
                  watch('hasSymbol') ? 'valid-condition' : 'invalid-condition'
                }
              >
                1 symbol
              </p>
              <p
                className={
                  errors.password.type === 'minLength'
                    ? 'invalid-condition'
                    : 'valid-condition'
                }
              >
                {errors.password.message}
              </p>
            </div>
          )}

          <label>
            Re-enter password
            <input
              {...register('confirmPassword', {
                required: 'This field is required',
                validate: value =>
                  value === watch('password') || 'Passwords do not match',
              })}
              type='password'
              onChange={handleConfirmPasswordChange}
            />
          </label>
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          {showMatchMessage && (
            <p className='valid-condition'>Passwords match!</p>
          )}

          <label className='checkbox-container'>
            <input type='checkbox' className='checkbox' />I agree to receive
            email notification(s). We will only send emails with important
            information, like project start dates. We will not sell your
            information!
          </label>

          <button className='submit-btn' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
