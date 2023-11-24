import React, { useState } from 'react'
import Writing from "assets/Writing.png"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./SignUp.scss"
import { useNavigate } from 'react-router-dom';
interface User {
    firstName: string;
    lastName: string;
    emailAddress: string
    password: string;
}

const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const SignUp: React.FC = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
    })

    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setData({
            ...data,
            [name]: val,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            navigate('/congrats')
        } else {
            console.log('Form validation failed. Please check the form fields.');
        }

    }

    const isFormValid = () => {
        return (
            data.firstName &&
            data.lastName &&
            data.email &&
            validatePassword(data.password) &&
            data.password === data.confirmPassword &&
            data.terms
        );
    };
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        if (!validatePassword(newPassword)) {
            setPasswordError('Password must contain one uppercase, one lowercase, one special character, and be at least 8 characters long');
        } else {
            setPasswordError('');
        }
        handleChange(e);
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        if (confirmPassword !== data.password) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }
        handleChange(e);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        return passwordRegex.test(password);
    };



    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };
    return (
        <div className='signup-container'>
            <h1>Join Bootcampr today.</h1>
            <h2>Get the experience. Get the job.</h2>
            <div className='contents-container'>
                <div className='img-container'>
                    <img src={Writing} alt='writing' />
                </div>
                <div className='form-container' onSubmit={handleSubmit}>
                    <form>

                        <label>First Name
                            <input
                                type='text'
                                name='firstName'
                                value={data.firstName}
                                onChange={handleChange}
                                className='input-field'
                            />
                        </label>

                        <label>Last Name
                            <input
                                type='text'
                                name='lastName'
                                value={data.lastName}
                                onChange={handleChange}
                                required
                                className='input-field'
                            />
                        </label>

                        <label>Email Address (ex. jeanine@bootcampr.io)
                            <input
                                type='text'
                                name='email'
                                className='input-field'
                                value={data.email}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>Password
                            <div className='password-input-container'>

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    className='input-field'
                                    value={data.password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <span className='password-toggle' onClick={handleTogglePasswordVisibility}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            <div style={{ color: passwordError ? 'red' : 'green' }}>{passwordError}</div>
                        </label>

                        <label>Confirm Password
                            <div className='password-input-container'>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name='confirmPassword'
                                    className='input-field'
                                    value={data.confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    required
                                />
                                <span className='password-toggle' onClick={handleToggleConfirmPasswordVisibility}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <div style={{ color: confirmPasswordError ? 'red' : 'green' }}>{confirmPasswordError}</div>
                            {!confirmPasswordError && data.confirmPassword && < div style={{ color: 'green' }}>Passwords Match!</div>}

                        </label>

                        <label className='checkbox'>
                            <input
                                type='checkbox'
                                name='terms'
                                onChange={handleChange}
                                checked={data.terms}
                                required

                            />
                            I agree to recieve email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!
                        </label>

                        <button
                            className='submit'
                            onClick={handleSubmit}
                            disabled={!isFormValid()} style={{ backgroundColor: isFormValid() ? '#FA9413' : '#ECEBEB', color: 'black' }}
                        >Sign Up</button>

                    </form>
                </div>
            </div>
        </div >
    )
}
