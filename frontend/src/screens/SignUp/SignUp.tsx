import { FC } from 'react'
import SignUpImage from 'assets/signup.svg'
import { SignUpForm } from 'components/SignUpForm/SignUpForm'
import './SignUp.scss'

export const SignUp: FC = () => {
  return (
    <div className='signup-container'>
      <div className='signup-header'>
        <h1>Join Bootcampr today.</h1>
        <h2>Get the experience. Get the job.</h2>
      </div>
      <div className='signup-content'>
        <div className='image-container'>
          <img src={SignUpImage} alt='signup' />
        </div>
        <div className='form-container'>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
