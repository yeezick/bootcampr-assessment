import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import * as api from '../../utils/sampleController';
import { Button } from '@mui/material';
import './SignUpForm.scss'

export const SignUpForm: React.FC = () => {
    const [userFormData, setUserFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        retypePassword: '',
        showPassword: false,
    });

    const [type, setType] = useState('password');
    const handleClickShowPassword = () => {
        setType(type === 'password' ? 'text' : 'password');
    }

    const handlePasswordChange = (prop) => (e) => {
        checkPassword();
        setUserFormData({
            ...userFormData, [prop]: e.target.value,
        })
    }

    const handleInputChange = (e) => {
        setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        try {
            const { firstName, lastName, email, password } = userFormData;
            const newUserData = { firstName, lastName, email, password };
            const user = api.signUp(newUserData);
            navigate('/congrats');
        } catch (err) {
            console.log(err)
        }
    };


    const checkPassword = () => {
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const symbol = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})');

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
    }


    return (
        <div className='signup-container'>
            <form className='column form' onSubmit={handleFormSubmit}>
                <label htmlFor="first-name">First name</label>
                <input
                    className="input"
                    type="text"
                    name="firstName"
                    onChange={handleInputChange}
                    value={userFormData.firstName} />

                <label htmlFor="last-name">Last name</label>
                <input
                    className="input"
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}
                    value={userFormData.lastName} />

                <label htmlFor="email">Email address (ex. jeanine@bootcampr.io)</label>
                <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={userFormData.email} />

                <label htmlFor="password">Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
                <Input
                    className="input"
                    name="password"
                    type={type}
                    onChange={handlePasswordChange("password")}
                    value={userFormData.password}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={
                                    handleClickShowPassword
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

                <label htmlFor="confirm">Re-enter password</label>
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
                <div>
                    <input type="checkbox" name="agree-check" id="agree-check" />
                    <label>I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!</label>
                </div>
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