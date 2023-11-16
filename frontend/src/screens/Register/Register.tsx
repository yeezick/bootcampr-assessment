import React, { useState } from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, TextField, Button } from '@mui/material'
import './Register.scss'

export const Register: React.FC = () => {

return (
        <div className='register-container'>
            <h1>
                Join Bootcampr today.
            </h1>
            <h3>
                Get the experience. Get the job.
            </h3>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m:1},
                }}
            >
                <FormControl variant="standard">
                    <TextField id="filled" label="First name" variant="filled"/>
                    <TextField id="filled" label="Last name" variant="filled"/>
                    <TextField required id="filled" label="Email address (ex. jeanine@bootcampr.io)" variant="filled"/>
                    <TextField id="filled-password-input" label="Password" type="password" variant="filled" />
                    <TextField id="filled-password-reentered-input" label="Re-Enter Password" type="password" variant="filled" />
                    <FormControlLabel control={<Checkbox />} label="I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!" />
                    <Button variant="contained">Sign up</Button>
                </FormControl>
            </Box>
        </div>
)
}