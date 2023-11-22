import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { addUser, validateEmail } from 'utils/sampleController'
import './SignUp.scss'
import { sign } from 'crypto'
import { isTypeAssertionExpression } from 'typescript'
import Image from 'assets/Image.svg';
import Checkmark from 'assets/Icon.png';
import Icon2 from 'assets/icon2.png';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

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
        <img className='signup-image' alt='sign-up' src={Image}></img>
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
  const [showPasswordRe, setShowPasswordRe] = useState(false);
  const [notification, setNotification] = useState(false);
  const [icon, setIcon] = useState(false);
  const [iconRe, setIconRe] = useState(false);


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

  const handleCheck = (event) => {
    setNotification(!notification);
  }

  const handleVisibility = (event) => {
    event.preventDefault()
    setIcon(!icon);
    setShowPassword(!showPassword);
  }

  const handleVisibilityRe = (event) => {
    event.preventDefault()
    setIconRe(!iconRe);
    setShowPasswordRe(!showPasswordRe);
  }

  const handleChange = (event) => {
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
          <FormField
            label="First name"
            type="text"
            name="firstName"
            onChange={handleChange}
            value={signupDetails.firstName}
          ></FormField>
          <FormField
            label="Last name"
            type="text"
            name="lastName"
            onChange={handleChange}
            value={signupDetails.lastName}
          ></FormField>
          <FormField
            label="Email"
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={handleEmail}
            value={signupDetails.email}
          >
            {signupDetails.email.length ? <p className={emailValidation ? 'email-valid' : 'email-invalid'}>Must use unique email</p> : <div className='email-placeholder'></div>}
          </FormField>
          <FormField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleChange}
            value={signupDetails.password}
          >
            <VisibilityButton
              onClick={handleVisibility}
              icon={icon ? eye : eyeOff}
            />
            {signupDetails.password.length ? <ValidationContainer passwordValidation={passwordValidation} /> : <div className='validation-placeholder'></div>}
          </FormField>
          <FormField
            label="Re-enter password"
            type={showPasswordRe ? 'text' : 'password'}
            name="passwordRe"
            onChange={handleChange}
            value={signupDetails.passwordRe}
          >
            <VisibilityButton
              onClick={handleVisibilityRe}
              icon={iconRe ? eye: eyeOff}
            />
            {signupDetails.passwordRe.length ? <p className={passwordMatch ? 'passwordmatch-valid' : 'passwordmatch-invalid'}>Passwords match</p> : ""}
          </FormField>
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

interface FormFieldProps {
  label: string;
  children?: React.ReactNode;
  type: string;
  name: string;
  onChange: (event: any) => void;
  onBlur?: (event: any) => void;
  value: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, children, type, name, onChange, onBlur, value }) => {
  return (
    <div className={`input-common`}>
      <h3 className='mini-header'>{label}</h3>
      <input
        className={`input input-${name}`}
        type={type}
        name={name}
        onChange={onChange}
        {...(onBlur && { onBlur })}
        value={value}
      />
      {children}
    </div>
  );
}

interface VisibilityButtonProps {
  onClick: (event: any) => void;
  icon: string;
}

const VisibilityButton: React.FC<VisibilityButtonProps> = ({ onClick, icon }) => {
  return (
    <button className='visibility-button'>
      <span className='visiblity-icon' onClick={onClick}>
        <Icon className='absolute mr-10' icon={icon}/>
      </span>
    </button>
  )
}

interface ValidationContainerProps {
  passwordValidation: {
    minLength: boolean,
    hasUpperCase: boolean,
    hasLowerCase: boolean,
    hasSpecialChar: boolean,
  }
}

const ValidationContainer: React.FC<ValidationContainerProps> = ({ passwordValidation }) => {
  return (
    <div className='validation-container'>
      {passwordValidation.hasUpperCase ? <p className='hasuppercase-valid'>
        <img className="icon" alt='checkbox' src={Checkmark}></img> 1 upper
      </p> :
        <p className='hasuppercase-invalid'>
          1 upper
        </p>}
      {passwordValidation.hasLowerCase ? <p className='haslowercase-valid'>
        <img className="icon" alt="checkbox" src={Checkmark}></img> 1 lower
      </p> :
        <p className='haslowercase-invalid'>
          1 lower
        </p>}
      {passwordValidation.hasSpecialChar ? <p className='hasspecialchar-valid'>
        <img className="icon" alt="checkbox" src={Checkmark}></img> 1 symbol
      </p> :
        <p className='hasspecialchar-invalid'>
          1 symbol
        </p>}
      {passwordValidation.minLength ? <p className='minchar-valid'>
        <img className="icon" alt="checkbox" src={Checkmark}></img> Min 8 characters
      </p> :
        <p className='minchar-invalid'>
          Minimum 8 characters
        </p>}
    </div>
  )
}