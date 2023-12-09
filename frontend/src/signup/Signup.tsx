import { Header } from "./Header"
import { SignupForm } from "./SignupForm"
import signupImage from "./signup-image.png"
import './Signup.scss'


export const Signup = (props:any) => {
  return (
    <div className="signup-container">
      <div className="header-wrapper">
        <Header />
      </div>   
      <div className="main-wrapper">
        <div className="image-wrapper">
          <img src={signupImage} alt="signup image" className="signup-image"/>
        </div>
        <SignupForm />
      </div>   
    </div>
  )
}