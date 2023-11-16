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
            <h1>
                Join Bootcampr today.
            </h1>
            <h3>
                Get the experience. Get the job.
            </h3>
            <Grid container component="main" sx={{ height: '100vh' }}>
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
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        component="form"
                        // onSubmit={handleRegister}
                        sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        }}
                    >
                        <FormControl variant="standard">
                            <TextField id="filled" label="First name" variant="filled"/>
                            <TextField id="filled" label="Last name" variant="filled"/>
                            <TextField required id="filled" label="Email address (ex. jeanine@bootcampr.io)" variant="filled"/>
                            <TextField id="filled-password-input" label="Password" type="password" variant="filled">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                                    label="Password"
                                />
                            </TextField>
                            <TextField id="filled-password-reentered-input" label="Re-Enter Password" type="password" variant="filled" />
                            <FormControlLabel control={<Checkbox value="allowEmails" />} label="I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!" />
                            <Button variant="contained">Sign up</Button>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </div>
)
}