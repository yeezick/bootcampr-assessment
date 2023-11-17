import React from 'react'
import signup_img from '../../assets/signup_img.png';
import './Signup.scss';

type Props = {}

export const Signup = (props: Props) => {
    return (
        <div className='signup-container'>
            <div className="header">
                <h1>Join Bootcampr today.</h1>
                <p>Get the experience. Get the job.</p>
            </div>
            <div className="content">
                <div className="signup-image">
                    <img src={signup_img} alt="Sign up" />
                </div>
                <div className="signup-form">
                    <form>
                        <label>First name
                            <input type="text" name='firstName' />
                        </label>
                        <label>Last name
                            <input type="text" name='lastName' />
                        </label>
                        <label className='signup-span'>Email address <span>(ex. jeanine@bootcampr.io)</span>
                            <input type="email" name='email' />
                        </label>
                        <div className="passwordBox">
                            <label>Password
                                <input type="password" name='password' />
                                <div>
                                    <p>1 uppercase</p>
                                    <p>1 lowercase</p>
                                    <p>1 number</p>
                                    <p>Minimum 8 characters</p>
                                </div>
                            </label>
                        </div>
                        <label>Re-enter password
                            <input type="password" name='confirmPassword' />
                        </label>
                        <div className='signup-checkbox'>
                            <input type="checkbox" id='notifications' />
                            <label htmlFor="notifications">
                                I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!
                            </label>
                        </div>
                        <button type='submit'>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}