import { SignUpForm } from '../../Components/SignUpForm/SignUpForm';
import './SignUp.scss';

export const SignUp: React.FC = () => {
    return (
        <div className="SignUp">
            <header>
                <h2>Join Bootcampr today.</h2>
                <h4>Get the experience. Get the job.</h4>
            </header>
            <div className='flex-ctr main-img'>
                <img src="https://i.imgur.com/sXQ4ned.png" alt="" />
            </div>
            <SignUpForm />
        </div>
    );

}
export default SignUp;