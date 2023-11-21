import React, { useState } from 'react'
import './Signup.scss'
// import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import signup from 'assets/signup-image.png'
import PasswordCriteriaMet from './PasswordCriteriaMet'

export const Signup: React.FC = () => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isPasswordConfirmationHidden, setIsPasswordConfirmationHidden] = useState(true);
    const [isPasswordFocus, setIsPasswordFocus] = useState(false);
    const [isPasswordConfirmationFocus, setIsPasswordConfirmationFocus] = useState(false);

    // const navigate = useNavigate();

    const helpText = {
        email: '(ex. jeanine@bootcampr.io)',
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const id = event.target['id'] 
        if (id === 'password-span') {
        setIsPasswordHidden(isPasswordHidden => !isPasswordHidden);
        } else {
            setIsPasswordConfirmationHidden(isPasswordConfirmationHidden => !isPasswordConfirmationHidden)
        }
    }

    const handlePasswordFocus = (): void => {
        setIsPasswordFocus(true)
    }

    const handlePasswordConfirmationFocus = (): void => {
        setIsPasswordConfirmationFocus(true)
    }

    const validationSchema = yup.object().shape({
        firstName: yup.string().required('First name is required.'),
        lastName: yup.string().required('Last name is required.'),
        email: yup.string().required('Email address is required.')
        .email('Please enter a valid email address.'),
        password: yup.string()
        .required('Password is required.')
        .test(
            'password-criteria',
            'Password must meet the criteria.',
            (value) => {
              const isLengthMet = value.length >= 8;
              const isUppercaseMet = /[A-Z]/.test(value);
              const isLowercaseMet = /[a-z]/.test(value);
              const isSpecialCharMet = /[!@#$%^&*(),.?":{}|<>]/.test(value);
              return isLengthMet && isUppercaseMet && isLowercaseMet && isSpecialCharMet;
            }
          ),
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
    {({ isValid, dirty, values, errors }) => (
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
            <label htmlFor='email' className='label'>Email address {helpText.email}</label>
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
              type={isPasswordHidden ? 'password' : 'text'}
              id='password'
              autoComplete='off'
              name='password'
              className='input'
              onFocus={handlePasswordFocus}
            />
            <span id='password-span' className={isPasswordHidden ? '' : 'hide-password'} onClick={handleClick}></span>
            {/* {errors.password ? <ErrorMessage name='password' component='div' className='errors' /> : */}
            {isPasswordFocus && (
            <PasswordCriteriaMet 
            isLengthMet={values.password.length >= 8}
            isUppercaseMet={/[A-Z]/.test(values.password)}
            isLowercaseMet={/[a-z]/.test(values.password)}
            isSpecialCharMet={/[!@#$%^&*(),.?":{}|<>]/.test(values.password)}
            />
          )}
          </div>

          <div className='form-item'>
            <label htmlFor='passwordConfirmation' className='label'>Re-enter password</label>
            <Field
              type={isPasswordConfirmationHidden ? 'password' : 'text'}
              id='passwordConfirmation'
              autoComplete='off'
              name='passwordConfirmation'
              className='input'
              onFocus={handlePasswordConfirmationFocus}
            />
            <span id='passwordConfirmation-span' className={isPasswordConfirmationHidden ? '' : 'hide-password'} onClick={handleClick}></span>
            {errors.passwordConfirmation ? <ErrorMessage name='passwordConfirmation' component='div' className='errors' /> :
            isPasswordConfirmationFocus && values.password.length > 0 ? (
            <div><p className='confirm'>Passwords match!</p></div>
          ) : null}
          </div>

          <div className='form-item-checkbox'>
            <div className='checkbox-content'>
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
            </div>
            <ErrorMessage name='checkbox' component='div' className='errors' />
          </div>

          <button type='submit' className={`submit-form ${isValid && dirty ? 'valid' : 'invalid'}`} children="Sign up" />
        </div>
      </Form>
    )}
    </Formik>
    </div>
    </div>
  )
}
