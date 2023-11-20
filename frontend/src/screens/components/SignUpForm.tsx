import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import './SignUpForm.scss'

export const SignUpForm: React.FC = () => {
    const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', email: '', password: '', retypePassword: '' });

    // const handlePassword = (event) => {
    //     setUserFormData({ ...userFormData, password: event.target.value })
    // }

    // const handleRetypePassword = (event) => {
    //     setUserFormData({ ...userFormData, retypePassword: event.target.value })
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const handleInputChange = (e) => {
        setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
    };

    // const SignUpButton = (event) => {
    //     const navigate = useNavigate()
    //     const handleSignUpButton = () => {
    //         navigate('/congrats')
    //     }
    // }

    return (
        <div className='signup-container'>
            <form className='column form' onSubmit={handleFormSubmit}>
                <p>First name</p>
                <input
                    className="input"
                    type="text"
                    name="firstName"
                    placeholder=""
                    onChange={handleInputChange}
                    value={userFormData.firstName} />

                <p>Last name</p>
                <input
                    className="input"
                    type="text"
                    name="lastName"
                    
                    placeholder=""
                    onChange={handleInputChange}
                    value={userFormData.lastName} />

                <p>Email address (ex. jeanine@bootcampr.io)</p>
                <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder=""
                    onChange={handleInputChange}
                    value={userFormData.email} />

                <p>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</p>
                <input
                    className="input"
                    name="password"
                    type="password"
                    placeholder=""
                    onChange={handleInputChange}
                    value={userFormData.password} />

                <p>Re-enter password</p>
                <input
                    className="input"
                    name="retypePassword"
                    type="password"
                    placeholder=""
                    onChange={handleInputChange}
                    value={userFormData.retypePassword} />

                <FormControlLabel control={<Checkbox />} label="I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!" />
                <div className='button-container'>
                    <Button fullWidth disabled={!(userFormData.firstName && userFormData.lastName && userFormData.email && userFormData.password && userFormData.retypePassword)} type="submit"
                        variant='contained'>
                        Sign Up
                    </Button>
                </div>
            </form>
        </div >
    )
}
