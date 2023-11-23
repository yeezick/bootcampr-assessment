import { Text, Box, Container } from '@chakra-ui/react'
import ReactConfetti from 'react-confetti'
//@ts-ignore
import VictoryBallad from '../../assets/kazoo.ogg'

export default function Congrats() {
  return (
    <Container
      backgroundImage="url('https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      height='100vh'
      width='100%'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <ReactConfetti />
      <audio autoPlay src={VictoryBallad} />
      <Box
        backdropFilter='blur(8px)'
        p={10}
        mt={-90}
        textAlign={'center'}
        borderRadius={20}
        zIndex={2}
      >
        <Text fontSize='6xl' fontWeight='bold' color='white'>
          Congratulations!
        </Text>
        <Text fontSize='4xl' color='white'>
          Welcome to bootcampr
        </Text>
      </Box>
    </Container>
  )
}
