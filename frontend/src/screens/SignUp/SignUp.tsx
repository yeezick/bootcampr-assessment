import './SignUp.scss'
import { SignUpForm } from 'components/SignUpForm/SignUpForm'
import Rectangle from 'assets/img/Rectangle.png'

export const SignUp: React.FC = () => {
  return (
    <>
      <div className='text-banner'>
        <h2>Join Bootcampr Today.</h2>
        <h4>Get the experience. Get the job.</h4>
      </div>
      <div className="wrapper">
      <div className='img-container'>
        <img src={Rectangle} alt='A hand holding a pen and writing on paper' />
      </div>
      <div className='sign-up-container'>
        <SignUpForm />
      </div>
      </div>
    </>
  )
}
