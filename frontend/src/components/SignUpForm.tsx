import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import './SignUpForm.scss'

export const SignUpForm: React.FC = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

    return (
        <div className='signup-container'>
            <div className='column form'>
                <p>First name</p>
                <div />
                <p>Last name</p>
                <TextField fullWidth id="last-name" variant="filled" />
                <p>Email address (ex. jeanine@bootcampr.io)</p>
                <TextField fullWidth id="email" variant="filled" />
                <p>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</p>
                <TextField fullWidth id="first-name" variant="filled" />
                <p>Re-enter password</p>
                <TextField fullWidth id="first-name" variant="filled" />
                <FormControlLabel control={<Checkbox />} label="I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!" />
                <div className='button-container'>
                    <Button variant='contained'>
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}