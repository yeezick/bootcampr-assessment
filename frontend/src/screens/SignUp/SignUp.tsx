import './SignUp.scss'
import SignUpImage from '@/../assets/signup-image.png'
import SignUpForm from './SignUpForm/SignUpForm'
import { Box, Container, SimpleGrid, Stack, Text } from '@chakra-ui/react'

export default function SignUp() {
  return (
    <Container>
      <Stack alignItems='center'>
        <Text>Join Bootcampr today.</Text>
        <Text>Get the experience. Get the job.</Text>
      </Stack>
      <SimpleGrid columns={2}>
        <Box display={{ sm: 'none', md: 'block' }}>
          <img src={SignUpImage} alt='A person writing in a notebook.' />
        </Box>
        <SignUpForm />
      </SimpleGrid>
    </Container>
  )
}
