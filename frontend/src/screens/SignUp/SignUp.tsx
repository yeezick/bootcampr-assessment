import React from 'react'
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Logo from '../../assets/SignUpImage.svg'
import './SignUp.scss'
import { AccountCircle } from '@mui/icons-material'

export const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showPassword2, setShowPassword2] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleClickShowPassword2 = () => setShowPassword2(show => !show)

  const handleMouseDownPassword2 = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
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
          <TextField
            helperText=' '
            label='Email address (ex. jeanine@bootcampr.io)'
          />
          <TextField
            label='Password'
            helperText=' '
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            helperText=' '
            label='Re-enter password'
            type={showPassword2 ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </div>
  )
}
