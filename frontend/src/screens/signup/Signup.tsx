import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, InputLabel, Checkbox, FormControlLabel } from '@mui/material';
import './Signup.scss';
import Write from 'assets/Write.svg'

export const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreedTerms: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
            alert('All fields are required.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!formData.agreedTerms) {
            alert('Please agree to the terms.');
            return;
        }

        navigate('/congrats');
    };



    return (
        <div className='signup-container'>
            <header>
                <h1>Join Bootcampr Today.</h1>
                <h3>Get the experience. Get the job.</h3>
            </header>

            <div className='content-container'>
                <div className='logo'>
                    <img src={Write} alt="Logo" />
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <TextField
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            placeholder ='Jeanine'
                            onChange={handleChange}
                            variant="filled"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <TextField
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder='Bootcampr'
                            value={formData.lastName}
                            onChange={handleChange}
                            variant="filled"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="email">Email address (ex. jeanine@bootcampr.io) </InputLabel>
                        <TextField
                            type="email"
                            id="email"
                            name="email"
                            placeholder='jeanine@bootcampr.io'
                            value={formData.email}
                            onChange={handleChange}
                            variant="filled"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="password">Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</InputLabel>
                        <TextField
                            type="password"
                            id="password"
                            name="password"
                            placeholder='T'
                            value={formData.password}
                            onChange={handleChange}
                            variant="filled"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="confirmPassword">Re-enter Password</InputLabel>
                        <TextField
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            variant="filled"
                        />
                    </div>

                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.agreedTerms}
                                    onChange={handleChange}
                                    name="agreedTerms"
                                />
                            }
                            label="I agree to receive email notification(s). We will only send 
                            emails with important information, like project start dates. 
                            We will not sell your information!"
                        />
                    </div>

                    <Button type="submit" variant="contained" className="custom-button">
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
};