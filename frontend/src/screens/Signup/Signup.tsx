import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import signup from '../../assets/images/signup.png';
import icon from '../../assets/images/icon.png';
import './Signup.scss';

const initialFormData = {
  email: '',
  password: '',
  reEnterPassword: '',
  firstName: '',
  lastName: '',
  agreement: false,
};

export const Signup: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    if (name === 'password' && !passwordTouched) {
      setPasswordTouched(true);
    }

    if (name === 'reEnterPassword') {
      setPasswordsMatch(value === formData.password);
    }
  };

  useEffect(() => {
    const isFormComplete =
      Object.values(formData).every((value) => value !== '') && formData.agreement;
    setFormComplete(isFormComplete);
  }, [formData]);

  const handleBlur = () => {
    if (passwordTouched) {
      setPasswordTouched(false);
    }

    if (passwordsMatch) {
      setPasswordsMatch(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.reEnterPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8001/sign-up', formData);

      if (response.status === 201) {
        navigate('/success');
      } else {
        alert('Failed to sign up. Please try again.');
      }
    } catch (error) {
      if (error.response.status === 409) {
        setError('User already exists. Please choose a different email.');
      } else {
        console.error('Error:', error);
        alert('An error occurred during signup.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return (
        <div className="container">
            <div>
                <h2>Join Bootcampr today.</h2>
                <h4>Get the experience. Get the job. </h4>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <div>
                    <img src={signup} alt="signup" />
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

                        <label htmlFor="lastName">Last name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

                        <label htmlFor="email">Email address (ex. jeanine@bootcampr.io)</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="password">Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            <img
                                src={icon}
                                alt="icon"
                                className="icon"
                                onClick={togglePasswordVisibility}
                            />
                        </div>

                        {passwordTouched && (
                            <div className="password-strength">
                                <span style={{ color: /[A-Z]/.test(formData.password) ? 'var(--seafoam)' : 'var(--rubarb)' }}>1 uppercase</span>
                                <span style={{ color: /[a-z]/.test(formData.password) ? 'var(--seafoam)' : 'var(--rubarb)' }}>1 lowercase</span>
                                <span style={{ color: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ? 'var(--seafoam)' : 'var(--rubarb)' }}>1 symbol</span>
                                <span style={{ color: formData.password.length >= 8 ? 'var(--seafoam)' : 'var(--rubarb)' }}>Minimum 8 characters</span>
                            </div>
                        )}

                        <label htmlFor="reEnterPassword">Re-enter password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="reEnterPassword"
                                name="reEnterPassword"
                                value={formData.reEnterPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            <img
                                src={icon}
                                alt="icon"
                                className="icon"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                        {passwordsMatch && <p className="passwords-match">Passwords match!</p>}



                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                id="agreement"
                                name="agreement"
                                checked={formData.agreement}
                                onChange={handleChange}
                            />
                            <label htmlFor="agreement">
                                I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!
                            </label>
                        </div>

                        <button
                            type="submit"
                            style={{ backgroundColor: formComplete ? 'var(--apricot)' : 'var(--smoke)' }}
                            disabled={!formComplete}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
