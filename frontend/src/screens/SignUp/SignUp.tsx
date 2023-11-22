import Container from '@mui/material/Container'
import hexagon from '../../assets/Hexagon.svg'
import './SignUp.scss'
import { Form } from 'components/Form/Form'

export const SignUp: React.FC = () => {
  return (
    <Container>
      <div className='landing-container'>
        <div className='signup-container'>
          <h1>Join Bootcampr today.</h1>
          <h2>Get the experience. Get the Job.</h2>
        </div>
        <div className='flex-container'>
          <img src={hexagon} alt='hand writing with pen' />
          <Form />
        </div>
      </div>
    </Container>
  )
}
