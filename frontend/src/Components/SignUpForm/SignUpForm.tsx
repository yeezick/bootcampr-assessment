import { SignUpBtn } from '../../Components/SignUpBtn/SignUpBtn';
import './SignUpForm.scss';
export const SignUpForm: React.FC = () => {
    return (
        <form className='SignUpForm'>
            <label htmlFor="first-name">First Name</label>
            <input id='first-name' type="text" />
            <label htmlFor="last-name">Last Name</label>
            <input id='last-name' type="text" />
            <label htmlFor="email">Email addresss (ex. jeanine@Bootcampr.io)</label>
            <input id='email' type="email" />
            <label htmlFor="password">Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
            <div className='password-div'>
                <input id='password' type="password" />
                <img src='Icon.svg'></img>
            </div>
            <label htmlFor="confirm">Re-enter password</label>
            <div className="password-div">
                <input id='confirm' type="password" />
                <img src='Icon.svg'></img>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" name="agree-check" id="agree-check" />
                <label htmlFor="agree-check">I agree to receive email notification(s). We will only send
                    emails with important information, like project start dates.
                    We will not sell your information!
                </label>
            </div>

            <SignUpBtn />
        </form>
    );
}

export default SignUpForm;