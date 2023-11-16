import { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, Paper, TextField } from '@mui/material'
import './Register.scss'
import RegisterPageImage from 'assets/RegisterPageImage.png'
import PasswordInput from 'components/PasswordInput'
import RePasswordInput from 'components/RePasswordInput'

export const Register: React.FC = () => {
    // const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {

    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         firstname: data.get('firstname'),
    //         lastname: data.get('lastname'),
    //         email: data.get('email'),
    //         password: data.get('password'),
    //         checkbox: data.get('checkbox'),
    //     });
    // };

    const [password, setPassword] = useState("")

    const [repassword, setRepassword] = useState("")

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
                        // onSubmit={handleRegister}
                        sx={{
                        display: 'grid',
                        gridTemplateColumns: { sm: '75%'},
                        }}
                    >
                        <FormControl variant="standard">
                            <p>First name</p>
                            <TextField required id="first-name" variant="filled" InputProps={{ disableUnderline: true}}/>
                            <p>Last name</p>
                            <TextField required id="last-name" variant="filled"InputProps={{ disableUnderline: true}}/>
                            <p>Email address (ex. jeanine@bootcampr.io)</p>
                            <TextField required id="email" variant="filled" InputProps={{ disableUnderline: true}}/>
                            <p>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</p>
                            <PasswordInput
                                password={password}
                                handlePassword={(e) => setPassword(e.target.value)}
                            />
                            <p>Re-enter password</p>
                            <RePasswordInput
                                repassword={repassword}
                                handleRePassword={(e) => setRepassword(e.target.value)}
                            />
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
                            <Button variant="contained"
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