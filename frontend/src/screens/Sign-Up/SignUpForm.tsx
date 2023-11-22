import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser, validateEmail } from 'utils/sampleController'
import './SignUp.scss'
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { FormField } from './FormField';
import { VisibilityButton } from './VisibilityButton';
import { ValidationContainer } from './ValidationContainer';
import { validatePassword } from './SignUpHelpers';

//Primary state management component of sign-up form
//Contains sub-components related to FormField, VisibilityButton, ValidationContainer
export const SignUpForm: React.FC = () => {
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
  
    //Function attached to onBlur in email input field
    //Checks whether or not currently inputted email is already present in the database
    const handleEmail = async (event) => {
      try {
        const email = event.target.value;
        const apiResponse = await validateEmail(email);
        setEmailValidation(!apiResponse);
      } catch (err) {
        console.error(err);
      }
    }
  
    //Simple boolean handler that manages whether or not the notification checkbox is ticked
    //Necessary to lock submission till checkmark is ticked
    const handleCheck = (event) => {
      setNotification(!notification);
    }
  
    //Handles visibility of the password input field
    const handleVisibility = (event) => {
      event.preventDefault()
      setIcon(!icon);
      setShowPassword(!showPassword);
    }
  
    //Handles visibility of the re-enter password input field
    const handleVisibilityRe = (event) => {
      event.preventDefault()
      setIconRe(!iconRe);
      setShowPasswordRe(!showPasswordRe);
    }
  
    //Universal handler of text input to form fields
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setSignupDetails((previous) => {
        return { ...previous, [name]: value }
      })
  
      //checks if the passwords match and validates the password against 
      if (name === 'password') {
        if (value === signupDetails.passwordRe) {
          setPasswordMatch(true);
        } else {
          setPasswordMatch(false);
        }
  
        const validated = validatePassword(value)
        setPasswordValidation(validated)
      }

      //check if password matches
      if (name === 'passwordRe') {
        if (value === signupDetails.password) {
          setPasswordMatch(true)
        } else {
          setPasswordMatch(false)
        }
      }
  
    }
  
    //Handles submission of form, navigating to success page when there is no internal server error occuring
    //MongoURI is an environmental variable, so this submission may not work in the case that a valid URI is not provided in .env of backend
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
                icon={iconRe ? eye : eyeOff}
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