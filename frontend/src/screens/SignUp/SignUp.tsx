import SignUpImage from '@/../assets/signup-image.png'
import SignUpForm from './SignUpForm/SignUpForm'
import {
  Box,
  ChakraProvider,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function SignUp() {
  return (
    <ChakraProvider>
      <Container centerContent maxWidth={'100vw'} height={'100vh'}>
        <Stack mb={5} width={'413px'} height={'101px'}>
          <Text fontWeight={'600'} fontSize={'38px'} lineHeight={'53.2px'}>
            Join Bootcampr today.
          </Text>
          <Text fontWeight={'600'} fontSize={'24px'} lineHeight={'33.6px'}>
            Get the experience. Get the job.
          </Text>
        </Stack>

        <SimpleGrid columns={{ sm: 1, md: 2 }} height={'100%'} spacingX={5}>
          <Box display={{ base: 'none', md: 'block' }}>
            <Image
              src={SignUpImage}
              alt='A person writing in a notebook.'
              mx={'auto'}
              pt={10}
              pl={10}
              ml={'-20px'}
              width={'360px'}
              // width={'337.483px'}
              height={'auto'}
            />
          </Box>
          <Box width={'448px'}>
            <SignUpForm />
          </Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  )
}
