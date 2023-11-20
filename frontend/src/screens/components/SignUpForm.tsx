import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import './SignUpForm.scss'
// import { toHaveFormValues } from '@testing-library/jest-dom/matchers';

export const SignUpForm: React.FC = () => {
    const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', email: '', password: '', retypePassword: '', showPassword: false, });

    const handleClickShowPassword = () => {
        setUserFormData({
            ...userFormData, showPassword: !userFormData.showPassword,
        })
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        handlePasswordChange('password');
    });

    const handlePasswordChange = (prop) => (e) => {
        checkPassword();
        setUserFormData({
            ...userFormData, [prop]: e.target.value,
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const handleInputChange = (e) => {
        setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
    };

    // const SignUpButton = (event) => {
    //     const navigate = useNavigate()
    //     const handleSignUpButton = () => {
    //         navigate('/congrats')
    //     }
    // }


    const checkPassword = () => {
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const symbol = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})')

        const lengthValid = length.test(userFormData.password);
        const lowerValid = lower.test(userFormData.password);
        const upperValid = upper.test(userFormData.password);
        const symbolValid = symbol.test(userFormData.password);

        const textStyle = {
            color: lengthValid && lowerValid && upperValid && symbolValid ? 'blue' : 'red',
        };

        return (
            <div id="password-strength" style={textStyle}>
                {upperValid ? '1 uppercase' : '1 uppercase'}
                <br />
                {lowerValid ? '1 lowercase' : '1 lowercase'}
                <br />
                {symbolValid ? '1 symbol' : '1 symbol'}
                <br />
                {lengthValid ? ' Minimum of 8 characters' : 'Minimum of 8 characters'}
            </div>
        );
    };

    return (
        <div className='signup-container'>
            <form className='column form' onSubmit={handleFormSubmit}>
                <p>First name</p>
                <input
                    className="input"
                    type="text"
                    name="firstName"
                    placeholder=""
                    onChange={handleInputChange}
                    value={userFormData.firstName} />

                <p>Last name</p>
                <input
                    className="input"
                    type="text"
                    name="lastName"

                    placeholder=""
                    onChange={handleInputChange}
                    value={userFormData.lastName} />

                <p>Email address (ex. jeanine@bootcampr.io)</p>
                <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder=""
                    onChange={handleInputChange}
                    value={userFormData.email} />

                <p>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</p>
                <Input
                    className="input"
                    name="password"
                    type={userFormData.showPassword ? "text" : "password"}
                    placeholder=""
                    onChange={handlePasswordChange("password")}
                    value={userFormData.password}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={
                                    handleClickShowPassword
                                }
                                onMouseDown={
                                    handleMouseDownPassword
                                }
                            >
                                {userFormData.showPassword ? (
                                    <VisibilityIcon />
                                ) : (
                                    <VisibilityOffIcon />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {checkPassword()}

                <p>Re-enter password</p>
                <Input
                    className="input"
                    name="retypePassword"
                    type={userFormData.showPassword ? "text" : "retypePassword"}
                    placeholder=""
                    onChange={handlePasswordChange("retypePassword")}
                    value={userFormData.retypePassword}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={
                                    handleClickShowPassword
                                }
                                onMouseDown={
                                    handleMouseDownPassword
                                }
                            >
                                {userFormData.showPassword ? (
                                    <VisibilityIcon />
                                ) : (
                                    <VisibilityOffIcon />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                />

                <FormControlLabel control={<Checkbox />} label="I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!" />
                <div className='button-container'>
                    <Button fullWidth disabled={!(userFormData.firstName && userFormData.lastName && userFormData.email && userFormData.password && userFormData.retypePassword)} type="submit"
                        variant='contained'>
                        Sign Up
                    </Button>
                </div>
            </form>
        </div >
    )
}
