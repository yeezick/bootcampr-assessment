import React, { ReactComponentElement } from 'react'
import { useState } from 'react'
import "./SIgnup.scss"
import SignupImage from "../../assets/Signup-image.svg"

/**
 * Renders the Signup component.
 *
 * @return {JSX.Element} The rendered Signup component.
 */
export const Signup = () => {
    
 return (
    <div className='signup-div'>
        <section className='signup-container'>
            <h2 className='signup-header'>Join Bootcampr today.</h2>
        </section>
        <section className='signup-h4-container'>
            <h4 className='signup-h4'>
                Get the experience. Get the job.
            </h4>
        </section>
        <div className='signup-image-container'>
            <svg className='svg-image'>
                <use href={SignupImage} />
            </svg>
        </div>
        <div className='signup-div-form'>
        <SignupForm />
        </div>
    </div>
 )
}

/**
 * Renders the signup form component.
 *
 * @return {JSX.Element} The rendered signup form component.
 */
export const SignupForm = () => {
    return (
        <div className='signup-form-container'>
            <form className='signup-form'>
                <section className='form-label-container'>
                    <label className='form-label'>First Name</label>
                    <input className='form-input'             type="text" 
                    placeholder='Enter your first name'    
                    />
                </section>

                <section className='form-label-container'>
                    <label className='form-label'>Last Name</label>
                    <input className='form-input'             type="text" 
                    placeholder='Enter your last name'    
                    />
                </section>

                <section className='form-label-container'>
                    <label className='form-label'>
                        Email{' '}
                        <span className='form-email-span'>(ex. jeanine@bootcampr.io)</span>
                        </label>
                    <input className='form-input'             type="email" 
                    placeholder='Enter your email'    
                    />
                </section>

                <section className='form-label-container'>
                    <label className='form-label'>Password</label>
                    <input className='form-input'             type="password" 
                    placeholder='Enter your password'    
                    />
                </section>

                <section className='form-label-container'>
                    <label className='form-label'>Confirm Password</label>
                    <input className='form-input'             type="password" 
                    placeholder='Confirm your password'    
                    />
                </section>

                <section>
                    <CheckboxForm />
                </section>

                <section>
                    <button className='form-button'>Sign Up</button>
                </section>

            </form>
        </div>
    )
}

/**
 * Renders a checkbox form component.
 *
 * @return {JSX.Element} The checkbox form component.
 */
const CheckboxForm = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="checkbox-container">
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="checkbox"
          />
        <label className="checkbox-label">
            {' '}I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!
        </label>
  
        {isChecked && (
          <img
            src="../assets/Group 93.jpg" 
          />
        )}
      </div>
    );
  };