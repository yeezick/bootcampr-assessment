import React, { useState } from 'react'
import './Signup.scss'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import signup from 'assets/signup-image.png'
import PasswordCriteriaMet from './PasswordCriteriaMet'

export const Signup: React.FC = () => {
    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const helpText = {
        email: '(ex. jeanine@bootcampr.io)',
    }

    const formSchema = yup.object().shape({
        firstName: yup.string().required('First name is required.'),
        lastName: yup.string().required('Last name is required.'),
        email: yup.string().required('Email address is required.').email('Please enter a valid email address.'),
        password: yup
        .string()
        .required('Password is required.'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], ).required('Please re-enter password.'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            checkbox: false,
        },
        validationSchema: formSchema,
        onSubmit: async (values) => {
            try {
                setErrors([]);

                const response = await fetch('', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });
                if (response.ok) {
                    navigate("/confirmation")
                } else {
                    const errorData = await response.json();
                    setErrors(errorData);
                }
            } catch (error) {
                console.error("Error occured during signup.", error);
                setErrors([{message: "Error occured during signup."}]);
            }
        }
    });

  return (
    <div className='signup-container'>
      <div className='header-container'>
        <h2>Join Bootcampr today.</h2>
        <h4>Get the experience. Get the job.</h4>
      </div>
      <div className='body-container'>
      <div className='image-container'>
        <div className='image-wrapper'>
        <img src={signup} alt='Hand drawing diagram with black pen'></img>
        </div>
      </div>
      <div className='form-container'>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-wrapper'>
                <div className='form-item'>
                    <label 
                    htmlFor='firstName' 
                    className='label'>First name</label>
                    <input 
                    className='input' 
                    type='text' 
                    id='firstName' 
                    autoComplete='off' 
                    name='firstName' 
                    value={formik.values.firstName} 
                    onChange={formik.handleChange} />
                    {formik.errors.firstName && formik.touched.firstName &&
                        <div className='errors'>{formik.errors.firstName}</div>}
                </div>
                <div className='form-item'>
                    <label 
                    htmlFor='lastName' 
                    className='label'>Last name</label>
                    <input 
                    className='input' 
                    type='text' 
                    id='lastName' 
                    autoComplete='off' 
                    name='lastName' 
                    value={formik.values.lastName} 
                    onChange={formik.handleChange} />
                    {formik.errors.lastName && formik.touched.lastName &&
                        <div className='errors'>{formik.errors.lastName}</div>}
                </div>
                <div className='form-item'>
                    <label 
                    htmlFor='email' 
                    className='label'>Email address {helpText.email}</label>
                    <input 
                    className='input' 
                    type='text' 
                    id='email' 
                    autoComplete='off' 
                    name='email' 
                    value={formik.values.email} 
                    onChange={formik.handleChange} />
                    {formik.errors.email && formik.touched.email &&
                        <div className='errors'>{formik.errors.email}</div>}
                </div>
                <div className='form-item'>
                    <label 
                    htmlFor='password' 
                    className='label'>Password</label>
                    <input 
                    className='input' 
                    type='password' 
                    id='password' 
                    name='password' 
                    value={formik.values.password} 
                    onChange={formik.handleChange} />
                    {formik.touched.password && formik.errors.password ? (
                <div className='errors'>{formik.errors.password}</div>
                ) : (
                    <PasswordCriteriaMet
                    isLengthMet={formik.values.password.length >= 8}
                    isUppercaseMet={/[A-Z]/.test(formik.values.password)}
                    isLowercaseMet={/[a-z]/.test(formik.values.password)}
                    isSpecialCharMet={/[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password)}
                    />
                )}
                </div>
                <div className='form-item'>
                    <label 
                    htmlFor='passwordConfirmation' 
                    className='label'>Re-enter password</label>
                    <input 
                    className='input' 
                    type='password' 
                    id='passwordConfirmation' 
                    name='passwordconfirmation' 
                    value={formik.values.passwordConfirmation} 
                    onChange={formik.handleChange} />
                    {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && 
                        <div className='errors'>{formik.errors.passwordConfirmation}</div>}
                </div>
                <div className='form-item-checkbox'>
                    <div className='checkbox-container'>
                        <input
                        className='input-checkbox'
                        type='checkbox'
                        id='checkbox'
                        name='checkbox'
                        checked={formik.values.checkbox}
                        onChange={formik.handleChange}
                        />
                        <span className='checkmark'></span>
                    </div>
                    <label htmlFor='checkbox' className='label'>
                        I agree to receive email notification(s). We will only send emails with important information,
                        like project start dates. We will not sell your information!
                    </label>
                    {formik.errors.checkbox && formik.touched.checkbox && (
                        <div className='errors'>{formik.errors.checkbox}</div>
                    )}
                    </div>
                <div className='error'>
                {errors}</div>
                <button type='submit' className={!formik.errors ? 'confirm' : null} children="Sign up" />
            </div>
        </form>
      </div>
      </div>
    </div>
  )
}
