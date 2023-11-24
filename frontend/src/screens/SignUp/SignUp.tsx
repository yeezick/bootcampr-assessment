import React from 'react'
import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Logo from '../../assets/SignUpImage.svg'
import './SignUp.scss'

export const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showPassword2, setShowPassword2] = React.useState(false)
  const [checkedValue, setCheckedValue] = React.useState(false)

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

  const handleAgreeTerms = () => {
    setCheckedValue(!checkedValue);
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
          <TextField label='First Name' />
          <TextField label='Last Name' />
          <TextField label='Email address (ex. jeanine@bootcampr.io)' />
          <TextField
            label='Password'
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
          <FormControl>
            <RadioGroup>
              <FormControlLabel
                control={
                  <Radio onClick={handleAgreeTerms} checked={checkedValue} />
                }
                label={
                  <Typography sx={{ fontSize: '0.8rem' }}>
                    I agree to receive email notification(s). We will only send
                    emails with important information, like project start dates.
                    We will not sell your information!
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
          <div className='signup-button'>Sign Up</div>
        </div>
      </div>
    </div>
  )
}
