import { Container, Grid, Stack } from '@mui/material'
import './SignUp.scss'
import SignUpImage from '@/../assets/signup-image.png'
import SignUpForm from './SignUpForm/SignUpForm'

export default function SignUp() {
  return (
    <Container>
      <Stack alignItems='center'>
        <h1>Join Bootcampr today.</h1>
        <h3>Get the experience. Get the job.</h3>
      </Stack>
      <Grid container direction='row'>
        <Grid display={{ sm: 'none', md: 'block' }}>
          <img src={SignUpImage} alt='A person writing in a notebook.' />
        </Grid>
        <Grid>
          <SignUpForm />
        </Grid>
      </Grid>
    </Container>
  )
}
