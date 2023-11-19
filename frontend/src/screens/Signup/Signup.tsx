import React, { useState, ChangeEvent } from 'react';
import './Signup.scss';
import Image from 'assets/signup_image.png';
import eyeLock from 'assets/eye_icon.png'

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
}

const Signup: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: false,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      checkbox: e.target.checked,
    });

  };

  console.log(formState);


  return (
    <>
      <h2>Join Bootcampr today.</h2>
      <h4>Get the experience. Get the job.</h4>
      <div className="signup-content">
        <div className="signup-image">
          <img src={Image} alt="signup" />
        </div>
        <div className="signup-form">
          <form action="">
            <label htmlFor="firstName">First name</label>
            <br />
            <input
              type="text"
              value={formState.firstName}
              onChange={handleInputChange}
              name="firstName"
              id="firstName"
            />
            <br />
            <label htmlFor="lastName">Last name</label>
            <br />
            <input
              type="text"
              value={formState.lastName}
              onChange={handleInputChange}
              name="lastName"
              id="lastName"
            />
            <br />
            <label htmlFor="email">
              Email address{' '}
              <span className="email">(ex. jeanine@bootcampr.io)</span>
            </label>
            <br />
            <input
              type="email"
              value={formState.email}
              onChange={handleInputChange}
              name="email"
              id="email"
            />
            <br />
            <label htmlFor="password">
              Password{' '}
              <span className="password">
                (Min 8 characters, 1 upper, 1 lower, 1 symbol)
              </span>
            </label>
            <br />
            <div className="password-wrapper">
            <input
              type="password"
              value={formState.password}
              onChange={handleInputChange}
              name="password"
              id="password"
            />
              <img className='eyeLock' src={eyeLock} alt="eye" />
            </div>
            <label htmlFor="confirmPassword">Re-enter password</label>
            <br />
            <div className="password-wrapper">
            <input
              type="password"
              value={formState.confirmPassword}
              onChange={handleInputChange}
              name="confirmPassword"
              id="confirmPassword"
            />
              <img className='eyeLock' src={eyeLock} alt="eye" />
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                checked={formState.checkbox}
                onChange={handleCheckboxChange}
                name="checkbox"
                className="checkbox"
                id="checkbox"
              />
              <span className="checkbox-text">
                I agree to receive email notification(s). We will only send
                emails with important information, like project start dates. We
                will not sell your information!
              </span>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
