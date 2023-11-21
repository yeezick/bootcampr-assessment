import React, { useState } from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilledInput, FormControl, IconButton, InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import signup_img from '../../assets/signup_img.png';
import './Signup.scss';

type Props = {}

interface FormBodyType {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long").refine((password: string) => {
        const upperCaseRegex = /[A-Z]/;
        const hasUpperCase = upperCaseRegex.test(password);
        if (!hasUpperCase) return false;

        const lowerCaseRegex = /[a-z]/;
        const hasLowerCase = lowerCaseRegex.test(password);
        if (!hasLowerCase) return false;

        const numberRegex = /\d/;
        const hasNumber = numberRegex.test(password);
        if (!hasNumber) return false;

        return true;
    }, "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"),
    confirmPassword: z.string().min(8)
}).refine((data: FormBodyType) => {
    return data.password === data.confirmPassword;
}, "Passwords do not match");

export const Signup = (props: Props) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword(show => !show);
    const handleClickshowConfirmPassword = () => setShowConfirmPassword(show => !show);

    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    const handleMouseDownConfirmPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    const { control, register, handleSubmit, formState: { errors } } = useForm<FormBodyType>({
        resolver: zodResolver(formSchema)
    })
    const submit = (data: FormBodyType) => {
        console.log(data);
    }

    const handleApiSignup = async () => {

    }

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
                    <form onSubmit={handleSubmit(submit)}>
                        <label>First name
                            <input type="text" {...register("firstName")} />
                        </label>
                        <label>Last name
                            <input type="text" {...register("lastName")} />
                        </label>
                        <label className='signup-span'>Email address <span>(ex. jeanine@bootcampr.io)</span>
                            <input type="email" {...register("email")} />
                        </label>
                        <div className="passwordBox">
                            <FormControl
                                fullWidth
                                variant='filled'
                            >
                                <label>Password</label>
                                {/* <InputLabel htmlFor='password'>Password</InputLabel> */}
                                <Controller
                                    name='password'
                                    control={control}
                                    render={({ field }) => <FilledInput
                                        id='password'
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    sx={{
                                                        bgcolor: "rgba(236, 235, 235, 1)",
                                                        borderRadius: "4px",
                                                        height: "36px",
                                                    }}
                                                >
                                                    {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        size='small'
                                        disableUnderline={true}
                                        sx={{
                                            bgcolor: "rgba(236, 235, 235, 1)",
                                            borderRadius: "4px",
                                            height: "36px",
                                            mt: 0.5,
                                            mb: 0,
                                            '& .MuiFilledInput-input': {
                                                p: "10px",
                                                fontSize: "12px"
                                            }
                                        }}
                                        {...field}
                                    />}
                                />
                                {/* <FilledInput
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                sx={{
                                                    bgcolor: "rgba(236, 235, 235, 1)",
                                                    borderRadius: "4px",
                                                    height: "36px",
                                                }}
                                            >
                                                {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    size='small'
                                    disableUnderline={true}
                                    sx={{
                                        bgcolor: "rgba(236, 235, 235, 1)",
                                        borderRadius: "4px",
                                        height: "36px",
                                        mt: 0.5,
                                        mb: 0,
                                        '& .MuiFilledInput-input': {
                                            p: "10px",
                                            fontSize: "12px"
                                        }
                                    }}
                                /> */}
                            </FormControl>
                            <div className='passwordValidation'>
                                <p>1 uppercase</p>
                                <p>1 lowercase</p>
                                <p>1 number</p>
                                <p>Minimum 8 characters</p>
                            </div>
                        </div>
                        <FormControl
                            fullWidth
                            variant='filled'
                        >
                            <label>Re-enter password</label>
                            <Controller
                                name='confirmPassword'
                                control={control}
                                render={({ field }) => <FilledInput
                                    id='confirmPassword'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={handleClickshowConfirmPassword}
                                                onMouseDown={handleMouseDownConfirmPassword}
                                                sx={{
                                                    bgcolor: "rgba(236, 235, 235, 1)",
                                                    borderRadius: "4px",
                                                    height: "36px",
                                                }}
                                            >
                                                {showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    size='small'
                                    disableUnderline={true}
                                    sx={{
                                        bgcolor: "rgba(236, 235, 235, 1)",
                                        borderRadius: "4px",
                                        height: "36px",
                                        mt: 0.5,
                                        mb: 0,
                                        '& .MuiFilledInput-input': {
                                            p: "10px",
                                            fontSize: "12px"
                                        }
                                    }}
                                    {...field}
                                />}
                            />

                        </FormControl>
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