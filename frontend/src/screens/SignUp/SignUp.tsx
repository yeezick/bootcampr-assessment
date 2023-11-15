import { Box, Container, Grid, Stack } from '@mui/material'
import './SignUp.scss'
import SignUpImage from '../../assets/signup-image.png'

export default function SignUp() {
  return (
    <Container>
      <Stack alignItems='center'>
        <h1>Join Bootcampr today.</h1>
        <h3>Get the experience. Get the job.</h3>
      </Stack>
      <Grid>
        <Box>
          <img src={SignUpImage} />
        </Box>
      </Grid>
    </Container>
  )
}
