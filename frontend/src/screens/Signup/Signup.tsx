import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import signup from '../../assets/images/signup.png';
import './Signup.scss';

export const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        agreement: false,
    });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8001/sign-up', formData);

            if (response.status === 201) {
                navigate('/success');
                alert('User signed up successfully');

            } else {
                alert('Failed to sign up. Please try again.');
            }
        } catch (error) {
            if (error.response.status === 409) {
                setError('User already exists. Please choose a different email.');
            } else if (error.response.status === 400) {
                setError('Password does not meet complexity requirements');
            } else {
                console.error('Error:', error);
                alert('An error occurred during signup.');
            }
        }
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
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
  
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
  
              <label htmlFor="email">Email address (ex. jeanine@bootcampr.io)</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
  
              <label htmlFor="password">Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
  
              <div className="checkbox-container">
                <input type="checkbox" id="agreement" name="agreement" checked={formData.agreement} onChange={handleChange} required />
                <label htmlFor="agreement">
                  I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!
                </label>
              </div>
  
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
};
