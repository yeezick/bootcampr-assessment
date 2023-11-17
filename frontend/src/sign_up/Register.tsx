import React, { useState } from 'react'
import './Register.scss'

export const Register: React.FC = () => {
    return (
        <div>
            <div id="wrap">
                <div id="content">
                    <h1>Join Bootcampr today.</h1>
                    <h3>Get the experience. Get the job.</h3>
                </div>
            </div>
            <p>First name</p>
            <p>Last name</p>
            <p>Email address (ex. jeanine@bootcampr.io)</p>
            <p>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</p>
            <p>Re-enter password</p>
            <p>I agree to receive email notification(s). We will only
                send emails with important information, like project start
                dates. We will not sell your information!
            </p>
        </div>

    )
}

