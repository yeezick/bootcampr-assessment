import React, { useState } from 'react'
import SignupLogo from 'assets/SignupLogo.png'
import './Signup.scss'

export const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reenteredPassword, setReenteredPassword] = useState<string>('');
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);
  const [needPasswordValidations, setNeedPasswordValidations] = useState<string[]>([]);
  const [metPasswordValidations, setMetPasswordValidations] = useState<string[]>([]);
  const [showPasswordValidations, setShowPasswordValidations] = useState<boolean>(false); 
  const [receiveNotifications, setReceiveNotifications] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPass = e.target.value;
    setPassword(newPass);
    validatePassword(newPass);
  };

  const handleReenteredPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reenteredPass = e.target.value;
    setReenteredPassword(reenteredPass);

    if (reenteredPass === password) {
      setPasswordsMatch(true);
      setShowPasswordValidations(false)
    } else {
      setPasswordsMatch(false);
      return;
    }
  };

  const handleReceiveNotificationsChange = () => {
    setReceiveNotifications(!receiveNotifications);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signupButtonDisabled = (): boolean => {
    return (
      !passwordsMatch ||
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      needPasswordValidations.length > 0
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    return;
  };

  const validatePassword = (password: string) => {
    const needValidations: string[] = [];
    const metValidations: string[] = [];
    
    if (!/[A-Z]/.test(password)) {
      needValidations.push('1 uppercase');
    } else if (/[A-Z]/.test(password)) {
      metValidations.push('1 uppercase');
    }

    if (!/[a-z]/.test(password)) {
      needValidations.push('1 lowercase');
    } else if (/[a-z]/.test(password)) {
      metValidations.push('1 lowercase');
    }

    if (!/\d/.test(password) && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      needValidations.push('1 symbol');
    } else if (!/\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      metValidations.push('1 symbol');
    }

    if (password.length < 8) {
      needValidations.push('Minimum 8 characters');
    } else if (password.length >= 8) {
      metValidations.push('Minimum 8 characters');
    }

    setNeedPasswordValidations(needValidations);
    setMetPasswordValidations(metValidations);
    setShowPasswordValidations(true);
  };

  return (
    <div className='signup-container'>

      <div className="title">
        <h1 className='h1-title'>Join Bootcampr today.</h1>
        <h3 className='h3-title'>Get the experience. Get the job.</h3>
      </div>

      <div className="body-container">
        <div className="img-container">
            <img src={SignupLogo} alt='sign-up' />
        </div>
        <div className="form-container">
            <form className='form'>
              <label htmlFor="firstName">First name</label>
              <input 
                type="text" 
                className='firstName'
                value={firstName}
                onChange={handleFirstNameChange}
              />

              <label htmlFor="lastName">Last name</label>
              <input 
                type="text" 
                className="lastName" 
                value={lastName}
                onChange={handleLastNameChange}
              />

              <label htmlFor="email">Email address (ex. jeanine@bootcampr.io) </label>
              <input 
                type="text" 
                className="email"
                value={email}
                onChange={handleEmailChange}
              />

              <label htmlFor="password">Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
              <input 
                type={showPassword ? 'text' : 'password'}
                className="password" 
                value={password}
                onChange={handlePasswordChange}
              />
              

              {needPasswordValidations.length > 0 && showPasswordValidations && (
                <div style={{ color: 'red' }}>
                  {needPasswordValidations.map((validation, index) => (
                    <div key={index}>{validation}</div>
                  ))}
                </div>
              )}
              {metPasswordValidations.length > 0 && showPasswordValidations && (
                <div style={{ color: 'green' }}>
                  {metPasswordValidations.map((validation, index) => (
                    <div key={index}>{validation}</div>
                  ))}
                </div>
              )}


              <button type="button" onClick={handlePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'} Password
              </button>

              <label htmlFor="confirmPassword">Re-enter password </label>
              <input 
                type={showPassword ? 'text' : 'password'}
                className="confirmPassword" 
                value={reenteredPassword}
                onChange={handleReenteredPasswordChange}
                />

              <button type="button" onClick={handlePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'} Password
              </button>

                {!showPasswordValidations && passwordsMatch && (
                  <div style={{ color: 'green' }}> Passwords match!</div>
                )}

              <label>
                <input 
                  type="checkbox" 
                  className="notifications"
                  checked={receiveNotifications}
                  onChange={handleReceiveNotificationsChange}
                />
                I agree to receive email notification(s). We will only send 
                emails with important information, like project start dates. 
                We will not sell your information!
              </label>

              <button 
                type='submit' 
                className="signup-button"
                disabled={signupButtonDisabled()}
                > Sign Up
              </button>

            </form>
        </div>
      </div>

    </div>
  )
}
