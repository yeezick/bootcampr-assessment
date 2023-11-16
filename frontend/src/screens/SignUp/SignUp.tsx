import React from 'react'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import Logo from '../../assets/SignUpImage.svg'
import './SignUp.scss'

export const SignUp: React.FC = () => {
    const showPassword = false;
  return (
    <div className='signup-container'>
      <div className='top-container'>
        <h1 className='first'>Join Bootcampr today.</h1>
        <h1 className='second'>Get the experience. Get the job.</h1>
      </div>
      <div className='bottom-container'>
        <img src={Logo} className='signup-image' />
        <div className='form-content'>
          <TextField helperText=' ' label='First Name' />
          <TextField helperText=' ' label='Last Name' />
          <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                //   onClick={handleClickShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {<Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
      </div>
    </div>
  )
}
