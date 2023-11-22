import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, Grid, Paper, TextField } from '@mui/material'
import './Register.scss'
import RegisterPageImage from 'assets/RegisterPageImage.png'
import PasswordInput from 'components/PasswordInput'
import PasswordAgainInput from 'components/PasswordAgainInput'
import PasswordChecklist from 'react-password-checklist'
import AllowEmailsCheckbox from 'components/AllowEmailsCheckbox'

export const Register: React.FC = () => {

    const navigate = useNavigate()

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            firstName: data.get('firstName'),
            lastLame: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        });
        navigate('/registered')
    }

    const [allowEmails, setAllowEmails] = useState(false)
    // console.log({allowEmails})
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
                        gridTemplateColumns: { sm: '65%'}
                        }}
                    >
                        <FormControl variant="standard">
                            <p>First name</p>
                            <TextField 
                                required 
                                id="firstName" 
                                name="firstName"
                                variant="filled" 
                                InputProps={{ disableUnderline: true, sx: { borderRadius: 2 }}}
                                inputProps={{ maxLength: 40, style: { padding: 15 } }}
                            />
                            <p>Last name</p>
                            <TextField 
                                required 
                                id="lastName" 
                                name="lastName"
                                variant="filled"
                                InputProps={{ disableUnderline: true, sx: { borderRadius: 2 }}}
                                inputProps={{ maxLength: 60, style: { padding: 15 }  }}
                            />
                            <p>Email address (ex. jeanine@bootcampr.io)</p>
                            <TextField 
                                required 
                                id="email" 
                                name="email"
                                variant="filled" 
                                InputProps={{ disableUnderline: true, sx: { borderRadius: 2 }}}
                                inputProps={{ maxLength: 80, style: { padding: 15 }  }}
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

                            <AllowEmailsCheckbox 
                                allowEmails= {allowEmails}
                                handleAllowEmails={(e) => setAllowEmails(allowEmails === false ? true : false)} />
                            <Button 
                                variant="contained"
                                type="submit"
                                fullWidth 
                                disabled={allowEmails === true ? false : true}
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