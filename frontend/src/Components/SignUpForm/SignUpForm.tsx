import { useState } from 'react';
import { SignUpBtn } from '../../Components/SignUpBtn/SignUpBtn';
import './SignUpForm.scss';
export const SignUpForm: React.FC = () => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeCheck: false
    })
    const [type, setType] = useState('password');

    const isFormValid =
        newUser.firstName.trim() !== '' &&
        newUser.lastName.trim() !== '' &&
        newUser.email.trim() !== '' &&
        newUser.password.length >= 8 &&
        /[A-Z]/.test(newUser.password) && // At least one uppercase letter
        /[a-z]/.test(newUser.password) && // At least one lowercase letter
        /[!@#$%^&*(),.?":{}|<>]/.test(newUser.password) && // At least one symbol
        newUser.password === newUser.confirmPassword &&
        newUser.agreeCheck;


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
    const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.checked });
    };

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });


    }



    function handleToggle() {
        setType(type === 'password' ? 'text' : 'password');
    }

    return (
        <form className='SignUpForm'>
            <label htmlFor="first-name">First name</label>
            <input required id='first-name' name='firstName' type="text" onChange={handleChange} />
            <label htmlFor="last-name">Last name</label>
            <input required id='last-name' name='lastName' type="text" onChange={handleChange} />
            <label htmlFor="email">Email addresss (ex. jeanine@Bootcampr.io) </label>
            <input required id='email' type="email" name='email' onChange={handleChange} />
            <label htmlFor="password">Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
            <div className='password-div'>
                <input required id='password' type={type} name='password' onChange={handlePasswordChange} />
                <img onClick={handleToggle} src='Icon.svg' alt='toggle password view'></img>
            </div>
            <div className="password-feedback">
                <p>1 uppercase</p>
                <p>1 uppercase</p>
                <p>1 uppercase</p>
                <p>1 uppercase</p>
            </div>
            <label htmlFor="confirm">Re-enter password</label>
            <div>
                <input required id='confirm' type={type} name='confirmPassword' onChange={handleChange} />
                <img onClick={handleToggle} src='Icon.svg' alt='toggle password view'></img>
            </div>
            <div className="checkbox-group">
                <input required type="checkbox" name="agreeCheck" id="agree-check" onChange={handleAgreeChange} />
                <label htmlFor="agree-check">I agree to receive email notification(s). We will only send
                    emails with important information, like project start dates.
                    We will not sell your information!
                </label>
            </div>
            <SignUpBtn isDisabled={!isFormValid} />
        </form>
    );
};

export default SignUpForm;