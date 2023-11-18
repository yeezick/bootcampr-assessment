import { useState } from 'react';
import { SignUpBtn } from '../../Components/SignUpBtn/SignUpBtn';
import './SignUpForm.scss';
export const SignUpForm: React.FC = () => {
    const [type, setType] = useState('password');
    function handleToggle() {
        if (type === 'password') {
            setType('text');
        } else {
            setType('password');
        }
    }


    return (
        <form className='SignUpForm'>
            <label htmlFor="first-name">First name</label>
            <input id='first-name' type="text" />
            <label htmlFor="last-name">Last name</label>
            <input id='last-name' type="text" />
            <label htmlFor="email">Email addresss (ex. jeanine@Bootcampr.io)</label>
            <input id='email' type="email" />
            <label htmlFor="password">Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
            <div>
                <input id='password' type={type} />
                <img onClick={handleToggle} src='Icon.svg'></img>
            </div>
            <label htmlFor="confirm">Re-enter password</label>
            <div>
                <input id='confirm' type={type} />
                <img onClick={handleToggle} src='Icon.svg'></img>
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