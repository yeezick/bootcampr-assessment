import React, { useState } from 'react'
import { Button } from '@mui/material'
import './Signup.scss'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import signup from 'assets/signup-image.png'

export const Signup: React.FC = () => {
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const exampleUser = {
        firstName: 'Jeanine',
        lastName: 'Bootcampr',
        email: 'jeanine@bootcampr.io',
        password: 'Thispassword'
    }

    const formSchema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], ).required(),
        // checkbox: ,
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            // checkbox: false,
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
      <div className='image-container'>
        <div className='image-wrapper'>
        <img src={signup}></img>
        </div>
      </div>
      <div className='form-container'>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-wrapper'>
                <div>
                    <label 
                    htmlFor='firstName' 
                    className='label'>First name</label>
                    <input 
                    className='input' 
                    type='text' 
                    id='firstName' 
                    autoComplete='off' 
                    name='firstName' 
                    placeholder={exampleUser.firstName}
                    value={formik.values.firstName} 
                    onChange={formik.handleChange} />
                    {formik.errors.firstName && formik.touched.firstName ? (
                        <div className='errors'>{formik.errors.firstName}</div>)
                        : null}
                </div>
                <div>
                    <label 
                    htmlFor='lastName' 
                    className='label'>Last name</label>
                    <input 
                    className='input' 
                    type='text' 
                    id='lastName' 
                    autoComplete='off' 
                    name='lastName' 
                    placeholder={exampleUser.lastName}
                    value={formik.values.lastName} 
                    onChange={formik.handleChange} />
                    {formik.errors.lastName && formik.touched.lastName ? (
                        <div className='errors'>{formik.errors.lastName}</div>)
                        : null}
                </div>
                <div>
                    <label 
                    htmlFor='email' 
                    className='label'>Email address (ex. {exampleUser.email})</label>
                    <input 
                    className='input' 
                    type='text' 
                    id='email' 
                    autoComplete='off' 
                    name='email' 
                    placeholder={exampleUser.email}
                    value={formik.values.email} 
                    onChange={formik.handleChange} />
                    {formik.errors.email && formik.touched.email ? (
                        <div className='errors'>{formik.errors.email}</div>)
                        : null}
                </div>
                <div>
                    <label 
                    htmlFor='password' 
                    className='label'>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
                    <input 
                    className='input' 
                    type='password' 
                    id='password' 
                    name='password' 
                    placeholder={exampleUser.password}
                    value={formik.values.password} 
                    onChange={formik.handleChange} />
                    {formik.errors.password && formik.touched.password ? (
                        <div className='errors'>{formik.errors.password}</div>)
                        : null}
                </div>
                <div>
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
                    {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? (
                        <div className='errors'>{formik.errors.passwordConfirmation}</div>)
                        : null}
                </div>
                {/* <div>
                    <label 
                    htmlFor='checkbox' 
                    className='label'></label>
                    <input 
                    className='input' 
                    type='checkbox' 
                    id='checkbox' 
                    name='checkbox' 
                    onChange={formik.handleChange} />
                    {formik.errors.checkbox && formik.touched.checkbox ? (
                        <div className='errors'>{formik.errors.checkbox}</div>)
                        : null}
                </div> */}
                <div className='error'>
                {errors}</div>
                <Button type='submit' children="Sign up" />
            </div>
        </form>
      </div>
    </div>
  )
}
