import React from 'react'
import { Container, Typography, Grid, Box } from '@mui/material'
import SignUpForm from './SignUpForm'
import './SignUp.scss'

export const SignUp: React.FC = () => {
  return (
    <Container component='main' className='sign-up-container'>
      <Typography component='h1' variant='h1'>
        Join Bootcampr today.
      </Typography>
      <Typography component='h2' variant='h3' >
        Get the experience. Get the job.
      </Typography>
      <Grid container sx={{ height: '80vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          className='featured-image'
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
          }}
        />
        <Grid item xs={12} sm={8} md={5}>
          <Box
            className='form-container'
          >
            <SignUpForm />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
