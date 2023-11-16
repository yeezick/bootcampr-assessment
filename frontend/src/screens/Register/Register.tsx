import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, Paper, TextField } from '@mui/material'
import './Register.scss'
import RegisterPageImage from 'assets/RegisterPageImage.png'
import PasswordInput from 'components/PasswordInput'
import PasswordAgainInput from 'components/PasswordAgainInput'
import PasswordChecklist from 'react-password-checklist'

export const Register: React.FC = () => {
    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get('firstName'),
            lastLame: data.get('lastName'),
            email: data.get('email'),
            password: password,
            passwordAgain: passwordAgain,
        });
    }

    const [password, setPassword] = useState("")

    const [passwordAgain, setPasswordAgain] = useState("")

    return (
        <div className='register-container'>
            <h1>Join Bootcampr today.</h1>
            <h2>Get the experience. Get the job.</h2>
            <Grid container component="main" 
                sx={{ 
                    height: '100vh'
                }}
            >
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url('+ RegisterPageImage+')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '40%',
                        backgroundPosition: '65% 25%',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0}>
                    <Box
                        component="form"
                        onSubmit={handleRegister}
                        sx={{
                        display: 'grid',
                        gridTemplateColumns: { sm: '75%'},
                        }}
                    >
                        <FormControl variant="standard">
                            <p>First name</p>
                            <TextField 
                                required 
                                id="firstName" 
                                name="firstName"
                                variant="filled" 
                                InputProps={{ disableUnderline: true}}
                            />
                            <p>Last name</p>
                            <TextField 
                                required 
                                id="lastName" 
                                name="lastName"
                                variant="filled"
                                InputProps={{ disableUnderline: true}}
                            />
                            <p>Email address (ex. jeanine@bootcampr.io)</p>
                            <TextField 
                                required 
                                id="email" 
                                name="email"
                                variant="filled" 
                                InputProps={{ disableUnderline: true}}
                            />
                            <p>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</p>
                            <PasswordInput
                                password={password}
                                handlePassword={(e) => setPassword(e.target.value)}
                            />
                            <p>Re-enter password</p>
                            <PasswordAgainInput
                                passwordAgain={passwordAgain}
                                handlePasswordAgain={(e) => setPasswordAgain(e.target.value)}
                            />
                            
                            {password ? 
                            <PasswordChecklist
                                rules={["capital","lowercase","specialChar","minLength","match"]}
                                minLength={8}
                                value={password}
                                valueAgain={passwordAgain}
                                messages={{
                                    capital: "1 uppercase",
                                    lowercase: "1 lowercase",
                                    specialChar: "1 symbol",
                                    minLength: "Minimum 8 characters",
                                    match: "Passwords must match",
                                }}
                            /> 
                            : ""}

                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        value="allowEmails"
                                        sx={{
                                            color: 'blue',
                                            borderRadius: '50',
                                            marginBlockEnd: '60px',
                                            marginRight: '10px',
                                            marginLeft: '5px',
                                            transform: 'scale(1.2)',
                                            stroke: '#ffffff',
                                            strokeWidth: '1.1'
                                        }} 
                                    />} 
                                label="I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!" 
                                labelPlacement="end"
                                sx={{
                                    marginBlockStart: '30px',
                                    marginBlockEnd: '30px'
                                }} />
                            <Button 
                                variant="contained"
                                type="submit"
                                fullWidth 
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.09)',
                                    color: 'rgba(0, 0, 0, 0.8)',
                                    boxShadow: '0',
                                    textTransform: 'unset',
                                    fontSize: '22px',
                                }}>Sign up</Button>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}