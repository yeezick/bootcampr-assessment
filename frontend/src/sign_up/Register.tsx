import React from 'react'
import './Register.scss'

export const Register: React.FC = () => {
    return (
        <div id="wrap">
            <div id="content">
                <h1>Join Bootcampr today.</h1>
                <h3>Get the experience. Get the job.</h3>
            </div>
            <div id="container-form">
                <form>
                    <label>
                        <div id="form-text"><p>First name</p></div>
                        <input type="text" />
                    </label>
                </form>
                <div>
                    <label>
                        <div id="form-text"><p>Last name</p></div>
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        <div id="form-text"><p>Email address (ex. jeanine@bootcampr.io)</p></div>
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        <div id="form-text"><p>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</p></div>
                        <input type="password" />
                    </label>
                </div>
                <div>
                    <label>
                        <div id="form-text"><p>Re-enter password</p></div>
                        <input type="password" />
                    </label>
                </div>
                    <div id="checkbox-and-disclaimer">
                    <div id="checkbox-text"><div id="input-box"><input type="checkbox" /></div>
                        I agree to receive email notification(s). We will only
                        send emails with important information, like project start
                        dates. We will not sell your information!
                    </div>
                </div>
                <button>Sign Up</button>
            </div>
        </div>

    )
}

