import React, { useState } from 'react'
import './Signup.scss'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import signup from 'assets/signup-image.png'
// import PasswordCriteriaMet from './PasswordCriteriaMet'

export const Signup: React.FC = () => {
    // const [errors, setErrors] = useState(null);
    // const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    // const [isPasswordConfirmationHidden, setIsPasswordConfirmationHidden] = useState(true);
    // const [isPasswordFocus, setIsPasswordFocus] = useState(false);
    // const [isPasswordConfirmationFocus, setIsPasswordConfirmationFocus] = useState(false);

    const navigate = useNavigate();

    const helpText = {
        email: '(ex. jeanine@bootcampr.io)',
    }

    // function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //     const id = event.target['id'] 
    //     if (id === 'password-span') {
    //     setIsPasswordHidden(isPasswordHidden => !isPasswordHidden);
    //     } else {
    //         setIsPasswordConfirmationHidden(isPasswordConfirmationHidden => !isPasswordConfirmationHidden)
    //     }
    // }

    // const handlePasswordFocus = (): void => {
    //     setIsPasswordFocus(true)
    // }

    // const handlePasswordConfirmationFocus = (): void => {
    //     setIsPasswordConfirmationFocus(true)
    // }

    const validationSchema = yup.object().shape({
        firstName: yup.string().required('First name is required.'),
        lastName: yup.string().required('Last name is required.'),
        email: yup.string().required('Email address is required.')
        .email('Please enter a valid email address.'),
        password: yup.string()
        .required('Password is required.'),
        passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match.')
        .required('Please re-enter password.'),
        checkbox: yup.bool().oneOf([true], 'You must agree to the terms.')
    });

    const initialValues = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            checkbox: false,
        };
    const onSubmit = (values: any) => {
        console.log(values);
            // try {
            //     setErrors([]);

            //     const response = await fetch('', {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify(values),
            //     });
            //     if (response.ok) {
            //         navigate("/confirmation")
            //     } else {
            //         const errorData = await response.json();
            //         setErrors(errorData);
            //     }
            // } catch (error) {
            //     console.error("Error occured during signup.", error);
            //     setErrors([{message: "Error occured during signup."}]);
            // }
        };

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
<Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
    {/* <div className='form-container'> */}
    {({ isValid, dirty }) => (
      <Form>
        <div className='form-wrapper'>
          <div className='form-item'>
            <label htmlFor='firstName' className='label'>First name</label>
            <Field
              type='text'
              id='firstName'
              autoComplete='off'
              name='firstName'
              className='input'
            />
            <ErrorMessage name='firstName' component='div' className='errors' />
          </div>

          <div className='form-item'>
            <label htmlFor='lastName' className='label'>Last name</label>
            <Field
              type='text'
              id='lastName'
              autoComplete='off'
              name='lastName'
              className='input'
            />
            <ErrorMessage name='lastName' component='div' className='errors' />
          </div>

          <div className='form-item'>
            <label htmlFor='email' className='label'>Email address</label>
            <Field
              type='text'
              id='email'
              autoComplete='off'
              name='email'
              className='input'
            />
            <ErrorMessage name='email' component='div' className='errors' />
          </div>

          <div className='form-item'>
            <label htmlFor='password' className='label'>Password</label>
            <Field
              type='text'
              id='password'
              autoComplete='off'
              name='password'
              className='input'
            />
            <ErrorMessage name='password' component='div' className='errors' />
          </div>

          <div className='form-item'>
            <label htmlFor='passwordConfirmation' className='label'>Re-enter password</label>
            <Field
              type='text'
              id='passwordConfirmation'
              autoComplete='off'
              name='passwordConfirmation'
              className='input'
            />
            <ErrorMessage name='passwordConfirmation' component='div' className='errors' />
          </div>

          <div className='form-item-checkbox'>
            <div className='checkbox-container'>
              <Field
                type='checkbox'
                id='checkbox'
                name='checkbox'
                className='input-checkbox'
              />
              <span className='checkmark'></span>
            </div>
            <label htmlFor='checkbox' className='label'>
              I agree to receive email notification(s). We will only send emails with important information,
              like project start dates. We will not sell your information!
            </label>
            <ErrorMessage name='checkbox' component='div' className='errors' />
          </div>

          <button type='submit' className={`submit-form ${isValid && dirty ? 'valid' : 'invalid'}`} children="Sign up" />
        </div>
      </Form>
    )}
      {/* </div> */}
    </Formik>
    </div>
{/* 

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
                    type={isPasswordHidden ? 'password' : 'text'} 
                    id='password' 
                    name='password' 
                    value={formik.values.password} 
                    onChange={formik.handleChange}
                    onFocus={handlePasswordFocus} />
                    <span id='password-span' className={isPasswordHidden ? '' : 'hide-password'} onClick={handleClick}></span>
                    {formik.touched.password && formik.errors.password ? (
                <div className='errors'>{formik.errors.password}</div>
                ) : isPasswordFocus && (
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
                    type={isPasswordConfirmationHidden ? 'password' : 'text'}
                    id='passwordConfirmation' 
                    name='passwordConfirmation' 
                    value={formik.values.passwordConfirmation} 
                    onChange={formik.handleChange}
                    onFocus={handlePasswordConfirmationFocus} />
                    <span id='passwordConfirmation-span' className={isPasswordConfirmationHidden ? '' : 'hide-password'} onClick={handleClick}></span>
                    {formik.errors.passwordConfirmation && isPasswordConfirmationFocus ?
                        <div className='errors'>{formik.errors.passwordConfirmation}</div> :
                        !formik.errors.passwordConfirmation && (formik.values.passwordConfirmation.length > 0) ? 
                            <div><p className='confirm'>Passwords Match!</p></div> : null
                        }
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
                <button type='submit' className='submit-form' children="Sign up" />
            </div>
        </form>
      </div>
      </div> */}
    </div>
  )
}
