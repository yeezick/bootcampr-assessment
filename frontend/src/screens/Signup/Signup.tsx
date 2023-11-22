import React, { ReactComponentElement } from 'react'
import { useState } from 'react'
import "./Signup.scss"
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
        <section className='signup-img-form-div'>
        <div className='signup-image-container'>
            <img src={SignupImage} alt='Signup' className='svg-image' />
        </div>
        <div className='signup-div-form'>
        <SignupForm />
        </div>
        </section>
        
    </div>
 )
}

/**
 * Renders the signup form component.
 *
 * @return {JSX.Element} The rendered signup form component.
 */
export const SignupForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreedToTerms: false
    });

/**
 * Handles the input change event and updates the form data state.
 * @param {Object} event - The input change event object.
 */
const handleInputChange = (event) => {
    // Destructure the name and value properties from the event target
    const { name, value } = event.target;
    
    // Update the form data state by merging the current state with the new property value
    setFormData({ ...formData, [name]: value });
};

/**
 * Updates the form data when the checkbox value changes.
 * @param {Object} event - The event object containing information about the checkbox change.
 */
const handleCheckboxChange = (event) => {
    // Get the checked value from the event target
    const { checked } = event.target;

    // Update the form data by merging the existing formData object with the new agreedToTerms value
    setFormData({ ...formData, agreedToTerms: checked });
};

/**
 * Handles the form submission for signing up a user.
 * 
 * @param {Event} event - The form submission event.
 */
const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    try {
        // Send a PUT request to the backend API for signup
        const response = await fetch('/signup', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Handle successful signup
            console.log('User signed up successfully!');
        } else {
            // Handle unsuccessful signup
            console.error('Signup failed:', response.statusText);
        }
    } catch (error) {
        // Handle error during signup
        console.error('Error during signup:', error.message);
    }
};


    return (
        <div className='signup-form-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
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
                    <CheckboxForm handleCheckboxChange={handleCheckboxChange}/>
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
const CheckboxForm = (handleCheckboxChange) => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheck= () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="checkbox-container">
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheck}
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