import React from 'react'
import './SignUp.scss'
import { SignUpForm } from '../components/SignUpForm'

export const SignUp: React.FC = () => {

    return (
        <div className='signup-container'>
            <div className='header-container'>
                <h1>Join Bootcampr Today!</h1>
                <h2>Get the experience. Get the job.</h2>
            </div>
            <div className='column-container'>
                <div className='column image'>
                </div>
                <div className='column form'>
                    <SignUpForm />
                </div>
            </div>
        </div >
    )
}