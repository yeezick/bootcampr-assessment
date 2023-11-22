import React, { useEffect, useState } from 'react'
import './Sign-Up.scss'
import InputField from '../../components/InputField/InputField'
import PasswordField from 'components/PasswordField/PasswordField'
import PasswordConfirmField from 'components/PasswordConfirmField/PasswordConfirmField'

export const SignUp: React.FC = () => {
  const [passwordMatch, setPasswordMatch] = useState<boolean>(null)
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [passwordConfirmValue, setPasswordConfirmValue] = useState<string>('')

  useEffect(() => {
    if (passwordConfirmValue.length > 0) {
      if (passwordValue === passwordConfirmValue) {
        setPasswordMatch(true)
      } else {
        setPasswordMatch(false)
      }
    }
  }, [passwordValue, passwordConfirmValue])

  return (
    <div className='signup-container'>
      <div className='header-container'>
        <h1>Join Bootcampr Today.</h1>
        <p>Get the experience. Get the job.</p>
      </div>
      <div className='body-container'>
        <div className='image-container'>
          <div>
            {/* <img
              src='https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e'
              alt=''
            /> */}
          </div>
        </div>
        <div className='form-container'>
          <form>
            <InputField
              type='text'
              label='First Name'
              identifier='first-name'
              validityType='valueMissing'
            />
            <InputField
              type='text'
              label='Last Name'
              identifier='last-name'
              validityType='valueMissing'
            />
            <InputField
              type='email'
              label='Email Address'
              placeholder='ex. jeanine@bootcampr.io'
              identifier='email-address'
              validityType='typeMismatch'
            />
            <PasswordField
              type={'password'}
              label={'Password'}
              identifier={'password'}
              setPasswordValue={setPasswordValue}
            />
            <PasswordConfirmField
              type={'password'}
              label={'Re-enter Password'}
              identifier={'confirm-password'}
              passwordMatch={passwordMatch}
              setPasswordValue={setPasswordConfirmValue}
            />
            <label
              htmlFor='notification-consent-checkbox'
              id='notification-consent'
            >
              <input id='notification-consent-checkbox' type='checkbox' />
              <p>
                I agree to receive email notification(s). We will only send
                emails with important information, like project start dates.
                <br />
                We will not sell your information.
              </p>
            </label>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}
