import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { addUser, validateEmail } from 'utils/sampleController'
import './SignUp.scss'
import { sign } from 'crypto'
import { isTypeAssertionExpression } from 'typescript'
import Image from 'assets/Image.svg';
import Icon from 'assets/Icon.png';

export const SignUp: React.FC = () => {
  return (
    <div>
      <div className='signup-container'>
        <div className='header-container'>
          <h1 className='header'>
            Join Bootcampr today.
          </h1>
          <h3 className='sub-header'>
            Get the experience. Get the job.
          </h3>
        </div>
        <img className='signup-image' src={Image}></img>
        <div className='form-container'>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  
  const [signupDetails, setSignupDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRe: '',
  });
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasLowerCase: false,
    hasUpperCase: false,
    hasSpecialChar: false
  });
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(false);


  const validatePassword = (password: string) => {
    const validations = {
      minLength: password.length >= 8,
      hasLowerCase: /[a-z]/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    }

    setPasswordValidation(validations);
  }

  const handleEmail = async (event) => {
    try {
      const email = event.target.value;
      const apiResponse = await validateEmail(email);
      setEmailValidation(!apiResponse);
    } catch (err) {
      console.error(err);
    }
  }

  const handleCheck = () => {
    setNotification(!notification);
  }

  const handleChange = (event) => {
    console.log(signupDetails)
    const { name, value } = event.target;

    setSignupDetails((previous) => {
      return { ...previous, [name]: value }
    })

    if (name === 'password') {
      if (value === signupDetails.passwordRe) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }

      validatePassword(value)
    }

    if (name === 'passwordRe') {
      if (value === signupDetails.password) {
        setPasswordMatch(true)
      } else {
        setPasswordMatch(false)
      }
    }

  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const apiResponse = await addUser(signupDetails);
      if (apiResponse && apiResponse.status === 200) {
        navigate('/success');
      } else {
        alert('Internal server error, please try again later');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className='form'>
        <form>
          <div className='input-common input-firstname'>
            <h3 className='mini-header'>First name</h3>
            <input
              className='input'
              type='text'
              name='firstName'
              onChange={handleChange}
            />
          </div>
          <div className='input-common input-lastname'>
            <h3 className='mini-header'>Last name</h3>
            <input
              className='input'
              type='text'
              name='lastName'
              onChange={handleChange}
            />
          </div>
          <div className='input-common input-email'>
            <h3 className='mini-header'>{'Email address [ex. jeanine@bootcampr.io]'}</h3>
            <input
              className='input'
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleEmail}
            />
            {signupDetails.email.length ? <p className={emailValidation ? 'email-valid' : 'email-invalid'}>Must use unique email</p> : ""}
          </div>
          <div className='input-common input-password'>
            <h3 className='mini-header'>{'Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)'}</h3>
            <input
              className='input'
              type= {showPassword ? 'text' : 'password'}
              name= 'password'
              onChange={handleChange}
            />
          </div>
          {signupDetails.password.length ? <div className='validation-container'>
              {passwordValidation.minLength ? <p className='minchar-valid'>
              <img className="icon" src={Icon}></img> Min 8 characters
                </p> : 
                <p className='minchar-invalid'>
                  Min 8 characters
                </p>}
                {passwordValidation.hasUpperCase ? <p className='minchar-valid'>
                <img className="icon" src={Icon}></img> 1 upper
                </p> : 
                <p className='minchar-invalid'>
                  1 upper
                </p>}
                {passwordValidation.hasLowerCase ? <p className='minchar-valid'>
              <img className="icon" src={Icon}></img> 1 lower
                </p> : 
                <p className='minchar-invalid'>
                  1 lower
                </p>}
                {passwordValidation.hasSpecialChar ? <p className='minchar-valid'>
                <img className="icon" src={Icon}></img> 1 symbol
                </p> : 
                <p className='minchar-invalid'>
                  1 symbol
                </p>}
          </div> : ""}
          <div className='input-common input-passwordre'>
            <h3 className='mini-header'>Re-enter password</h3>
            <input
              className='input'
              type= {showPassword ? 'text' : 'password'}
              name='passwordRe'
              onChange={handleChange}
            />
            {signupDetails.passwordRe.length ? <p className={passwordMatch ? 'passwordmatch-valid' : 'passwordmatch-invalid'}>Passwords match</p>: ""}
          </div>
          <div className='notification-container'>
            <input
              className='notification-checkbox' 
              type='checkbox'
              onChange={handleCheck}
            ></input>
            <p className='notification-text'>
              I agree to receive email notification(s). We will only send 
              emails with important information, like project start dates.
              We will not sell your information!
            </p>
          </div>
          <div className='button-container'>
            <button
              className={Object.values(passwordValidation).includes(false) || !passwordMatch || !emailValidation || !notification ? 'submit-invalid' : 'submit-valid'}
              type='submit'
              disabled={Object.values(passwordValidation).includes(false) || !passwordMatch || !emailValidation || !notification}
              onClick={handleSubmit}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}