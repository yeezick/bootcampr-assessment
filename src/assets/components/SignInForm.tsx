import * as React from 'react';
import { useState, useEffect, ReactElement } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './SignInForm.scss'
import { useNavigate } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  components: {
    MuiTextField:{
      styleOverrides: {
        root:{
          padding: 0,
        }
      }
    },
    MuiInput:{
      styleOverrides: {
        root:{
          padding: 0,
        }
      }
    }
  }

});

export default function SignUp() {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    // States for sign in inputs
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dupPassword, setDupPassword] = useState('')
    const [lastName, setLastName] = useState('')


    
    // States for password requirements
    const [validLength, setValidLength] = useState(false);
    const requiredLength = 8;
    const [hasSymbol, setHasSymbol] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [match, setMatch] = useState(false);
    
    
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
      });
      
      navigate('/congrats')
    };
    
  
useEffect(() => {
  setValidLength(password.length >= requiredLength ? true : false);
  setUpperCase(password.toLowerCase() !== password);
  setLowerCase(password.toUpperCase() !== password);
  setHasSymbol(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password));  
  // // Conditional if all the required fields are
  // if( firstName && lastName && email && password == dupPassword ){
    //   setFormComplete(true)
    // }
  }, [password, requiredLength])
  
  const matchPassword = ((password==dupPassword) && (validLength))

  // Variable if all fields are completed
  const formCompleted = ((firstName) && (lastName) && (email) && (matchPassword))

// function SubmitButton(){
//   if( firstName && lastName && email && password == dupPassword ){
//     return(
//       <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2, bgcolor:'orange', color:'black' }}
//         >
//           Sign Up
//       </Button>
//     )
//     } else {
//       return (
//         <Button 
//           type="submit" 
//           fullWidth 
//           variant="contained" 
//           disabled 
//           sx={{ mt: 3, mb: 2, bgcolor:'lightgrey', color:'black' }}
//         >
//           Sign Up
//         </Button>
//       )}
              



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

            {/* ---------------------------- FIRST NAME ----------------------------------*/}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="h1" variant="subtitle2">
                  First Name
                </Typography>
                <TextField
                  name='firstName'
                  required
                  fullWidth
                  id="firstName"
                  size="small"
                  variant="filled"
                  onChange={(event)=> {setFirstName(event.target.value)}}
                  inputProps={{
                    style:{
                      padding: 8,
                    }
                  }}
                />

              </Grid>
              
                {/* ---------------------------- LAST NAME ----------------------------------*/}
              <Grid item xs={12}>
                <Typography component="h1" variant="subtitle2">
                  Last Name
                </Typography>
                <TextField
                  name="lastName"
                  fullWidth
                  id="lastName"
                  size="small"
                  variant="filled"
                  onChange={(event)=> {setLastName(event.target.value)}}
                  inputProps={{
                    style:{
                      padding: 8,
                    }
                  }}
                />
              </Grid>

                  {/* ---------------------------- EMAIL ----------------------------------*/}
              <Grid item xs={12}>
                <Typography component="h1" variant="subtitle2">
                  Email
                </Typography>
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  size="small"
                  variant="filled"
                  onChange={(event) => {setEmail(event.target.value)}}
                  inputProps={{
                    style:{
                      padding: 8,
                    }
                  }}
                />
              </Grid>

              {/* ---------------------------- PASSWORD ----------------------------------*/}
              <Grid item xs={12}>
                <Typography component="h1" variant="subtitle2">
                  Password
                </Typography>
                <FormControl fullWidth variant="filled">
                    {/* <InputLabel htmlFor="filled-adornment-password">Password</InputLabel> */}
                    <FilledInput
                        id="password"
                        name='password'
                        required
                        onChange={(event) => {setPassword(event.target.value)}}
                        type={showPassword ? 'text' : 'password'}
                        inputProps={{
                          style:{
                            padding: 8,
                          }
                        }}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                         }
                    />
                </FormControl>
              </Grid>

              {/* ---------------------------- PASSWORD VALIDATION ----------------------------------*/}
              <Grid item xs={12}>
                {password ? 
                  <div className='password-validation'>
                    {upperCase ? <span className='valid'>1 uppercase</span> : <span className='invalid'>1 uppercase</span>}
                    {lowerCase ? <span className='valid'>1 lowercase</span> : <span className='invalid'>1 lowercase</span>}
                    {hasSymbol ? <span className='valid'>1 symbol</span> : <span className='invalid'>1 symbol</span>}
                    {validLength ? <span className='valid'>Minimum 8 characters</span> : <span className='invalid'>Minimum 8 characters</span>}
                  </div> 
                  : 
                  <div></div>
                }
              </Grid>

              {/* ---------------------------- RE-ENTER PASSWORD ----------------------------------*/}
              <Grid item xs={12}>
                <Typography component="h1" variant="subtitle2">
                  Re-enter password
                </Typography>
                <FormControl fullWidth variant="filled">
                    <FilledInput
                        id="filled-adornment-password"
                        required
                        name='dupPassword'
                        type={showPassword ? 'text' : 'password'}
                        onChange={(event) => {setDupPassword(event.target.value)}}
                        inputProps={{
                          style:{
                            padding: 8,
                          }
                        }}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                         }
                    />
                </FormControl>
              </Grid>

              {/* ---------------------------- PASSWORD MATCHING VALIDATION ----------------------------------*/}
              <Grid item xs={12} sx={{p:0}}>
                {dupPassword ? 
                  <div className='password-validation'>
                    {match ? <span className='valid'>Passwords match!</span> : <span className='invalid'>Passwords do not match</span>}
                  </div> 
                  : 
                  <div className='empty'></div>
                }
              </Grid>

              {/* ---------------------------- CHECKBOX ----------------------------------*/}
              <Grid item xs={12}>
                {/* <div className='checkbox'> */}
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    // label = ''
                    label={
                      <Box component="div" fontSize={15}>
                        I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!"
                      </Box>
                    }  
                  />
              </Grid>
            </Grid>
            { formCompleted  ?
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor:'orange', color:'black' }}
                >
                  Sign Up
              </Button>
              :
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled
                sx={{ mt: 3, mb: 2, bgcolor:'lightgrey', color:'black' }}
                >
                  Sign Up
              </Button>
            }

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}