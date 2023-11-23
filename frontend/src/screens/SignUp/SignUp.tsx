import { IoIosEyeOff, IoMdEye } from 'react-icons/io'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import './SignUp.scss' // Your SCSS file for styling
import { checkEmail } from 'utils/sampleController'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  reenterPassword: string
  agreeToTerms: boolean
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<FormValues>()
  const [showPassword, setShowPassword] = useState(false)


  const handleBlurValidation = async (fieldName: keyof FormValues) => {
    if (fieldName==='email') {
       handleEmailCheck(watch('email'))
    }
    await trigger(fieldName) 
  }
  const handleEmailCheck = async (email: string) => {
    await checkEmail(email)

  }

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data) 
  }

  const password = watch('password')

  return (
    <div className='signup-container'>
      <h1 className='main-heading'>Join Bootcampr today.</h1>
      <p className='tagline'>Get the experience. Get the job.</p>
      <div className='form-container'>
        <div className='image-section'>
          {/* Image Placeholder */}
          <img src='/signupPhoto.png' alt='Signup' />
        </div>
        <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-fields'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              {...register('firstName', { required: true })}
              onBlur={() => handleBlurValidation('firstName')}
            />
            {errors.firstName && (
              <span className='error-message'>First name is required</span>
            )}
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              {...register('lastName', { required: true })}
              onBlur={() => handleBlurValidation('lastName')}
            />
            {errors.lastName && (
              <span className='error-message'>Last name is required</span>
            )}
            <label htmlFor='email'>
              Email address
              <span className='spanLabelText'>(ex. jeanine@bootcampr.io)</span>
            </label>
            <input
              type='email'
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+\.com$/i,
              })}
              onBlur={() => handleBlurValidation('email')}
            />
            {errors.email && (
              <span className='error-message'>Valid email is required</span>
            )}

            <label htmlFor='password'>
              Password
              <span className='spanLabelText'>
                (Min 8 characters, 1 upper, 1 lower, 1 symbol)
              </span>
            </label>
            <div className='password-field'>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
                onBlur={() => handleBlurValidation('password')}
              />
              <span
                className='show-password-icon'
                onClick={() => togglePasswordVisibility()}
              >
                {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
              </span>
              {errors.password && (
                <span className='error-message'>
                  Password must be at least 8 characters with one uppercase, one
                  lowercase, and one symbol
                </span>
              )}
            </div>

            {/* Re-enter password field with onBlur validation */}
            <label htmlFor='reenterPassword'>Re-enter Password</label>
            <div className='password-field'>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('reenterPassword', {
                  required: true,
                  validate: value =>
                    value === password || 'Passwords do not match',
                })}
                onBlur={() => handleBlurValidation('reenterPassword')}
              />
              <span
                className='show-password-icon'
                onClick={() => togglePasswordVisibility()}
              >
                {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
              </span>
              {errors.reenterPassword && (
                <span className='error-message'>
                  {errors.reenterPassword.message}
                </span>
              )}
            </div>

            {/* Checkbox for agreeing to terms */}
            <div className='checkBoxInput'>

              <input
                type='checkbox'
                {...register('agreeToTerms', { required: true })}
                />
            <label>
              I agree to receive email notification(s). We will only send emails
              with important information, like project start dates. We will not
              sell your information!
            </label>
                </div>
            {errors.agreeToTerms && (
              <span className='error-message'>You must agree to the terms</span>
            )}
          </div>

          <button type='submit' className='signup-button'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
