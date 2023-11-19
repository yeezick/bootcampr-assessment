import React, { useState } from 'react'
import './SignUp.scss'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const SignUp: React.FC = () => {


    return (
        <div className='signup-container'>
            <div className='header-container'>
                <h1>Join Bootcampr Today!</h1>
                <h2>Get the experience. Get the job.</h2>
            </div>
            <div className='column-container'>
                <div className='column image'>
                </div>
                <div className='column form'>
                    <p>First name</p>
                    <TextField fullWidth id="first-name" variant="filled" />
                    <p>Last name</p>
                    <TextField fullWidth id="last-name" variant="filled" />
                    <p>Email address (ex. jeanine@bootcampr.io)</p>
                    <TextField fullWidth id="email" variant="filled" />
                    <p>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</p>
                    <TextField fullWidth id="first-name" variant="filled" />
                    <p>Re-enter password</p>
                    <TextField fullWidth id="first-name" variant="filled" />
                    <FormControlLabel control={<Checkbox />} label="I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!"/>
                </div>
            </div>
        </div >
    )
}