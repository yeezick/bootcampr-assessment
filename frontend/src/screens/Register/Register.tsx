import React from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import './Register.scss'
import RegisterPageImage from 'assets/RegisterPageImage.png'

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

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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
                        backgroundSize: '50%',
                        backgroundPosition: '65% 25%',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0}>
                    <Box
                        component="form"
                        // onSubmit={handleRegister}
                        sx={{
                        my: 3,
                        mx: 2,
                        display: 'grid',
                        gridTemplateColumns: { sm: '80%'},
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
                            <TextField required id="password" type="password" variant="filled" InputProps={{ disableUnderline: true}}>
                                <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password "
                                />
                            </TextField>
                            <p>Re-enter Password</p>
                            <TextField id="reentered-password" type="password" variant="filled" InputProps={{ disableUnderline: true}}/>
                            <FormControlLabel control={<Checkbox value="allowEmails" />} label="I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!" labelPlacement="end"/>
                            <Button variant="contained">Sign up</Button>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </div>
)
}