import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { UseFormGetValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilledInput, FormControl, IconButton, InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CheckIcon from '@mui/icons-material/Check';

import signup_img from '../../assets/signup_img.png';
import './Signup.scss';
import { signup } from 'utils/signup';

type Props = {}
type ValidationItemProps = {
    text: string;
    valid: boolean;
}

export interface FormBodyType {
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
}).refine(schema => schema.password === schema.confirmPassword, { message: "Passwords do not match" });

const ValidationItem = (props: ValidationItemProps & { getValues: UseFormGetValues<FormBodyType> }) => {
    const { text, valid, getValues } = props;
    const password = getValues("password");

    const uppercaseValid = /[A-Z]/.test(password);
    const lowercaseValid = /[a-z]/.test(password);
    const numberValid = /\d/.test(password);
    const lengthValid = password.length >= 8;

    const individualValidations = {
        uppercase: uppercaseValid,
        lowercase: lowercaseValid,
        number: numberValid,
        length: lengthValid,
    };

    const validationStatus = uppercaseValid && lowercaseValid && numberValid && lengthValid;

    return (
        <p style={{ color: validationStatus ? "green" : "red" }}>
            {valid && <CheckIcon />}
            {text}
            {Object.keys(individualValidations).map((validationKey) => {
                const validationResult = individualValidations[validationKey];
                const validationIcon = validationResult ? <CheckIcon /> : null;
                return (
                    <span key={validationKey}>
                        {validationIcon} {validationKey}
                    </span>
                );
            })}
        </p>
    )
}

// const ValidationItem = (props: ValidationItemProps & { getValues: UseFormGetValues<FormBodyType> }) => {
//     const { text, valid, getValues } = props;
//     return (
//         <p style={{ color: valid ? "green" : "red" }}>
//             {valid && <CheckIcon />}
//             {text}
//         </p>
//     )
// }

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

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormBodyType>({
        mode: "onChange",
        resolver: zodResolver(formSchema)
    })

    const navigate = useNavigate();
    const submit = async (data: FormBodyType) => {
        try {
            const res = await signup(data);
            navigate("/congrats");
            console.log(res);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
            }
        }
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
                            <input type="text" name='firstName' {...register("firstName", { required: true })} />
                            {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
                        </label>
                        <label>Last name
                            <input type="text" name='lastName' {...register("lastName", { required: true })} />
                            {errors.lastName && <p className='error'>{errors.lastName.message}</p>}
                        </label>
                        <label className='signup-span'>Email address <span>(ex. jeanine@bootcampr.io)</span>
                            <input type="email" name='email' {...register("email", { required: true })} />
                            {errors.email && <p className='error'>{errors.email.message}</p>}
                        </label>
                        <div className="passwordBox">
                            <FormControl
                                fullWidth
                                variant='filled'
                            >
                                <label>Password</label>
                                <FilledInput
                                    id='password'
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters long"
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                                            message:
                                                "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                                        }
                                    })}
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
                                />
                                {errors.password && <p className='pError'>{errors.password.message}</p>}
                            </FormControl>
                            <div className='passwordValidation'>
                                {/* <ValidationItem
                                    text='1 uppercase'
                                    valid={!errors.password && /[A-Z]/.test(getValues("password"))}
                                    getValues={getValues}
                                />
                                <ValidationItem
                                    text='1 lowercase'
                                    valid={!errors.password && /[a-z]/.test(getValues("password"))}
                                    getValues={getValues}
                                />
                                <ValidationItem
                                    text='1 number'
                                    valid={!errors.password && /\d/.test(getValues("password"))}
                                    getValues={getValues}
                                />
                                <ValidationItem
                                    text='Minimum 8 characters'
                                    valid={!errors.password && getValues("password").length >= 8}
                                    getValues={getValues}
                                /> */}
                                {/* <ValidationItem
                                    text='1 uppercase'
                                    valid={formSchema.safeParse(getValues("password")).success}
                                />
                                <ValidationItem
                                    text='1 lowercase'
                                    valid={formSchema.safeParse(getValues("password")).success}
                                />
                                <ValidationItem
                                    text='1 number'
                                    valid={formSchema.safeParse(getValues("password")).success}
                                />
                                <ValidationItem
                                    text='Minimum 8 characters'
                                    valid={formSchema.safeParse(getValues("password")).success}
                                /> */}
                                <p>1 uppercase</p>
                                <p>1 lowercase</p>
                                <p>1 number</p>
                                <p>Minmum 8 characters</p>
                            </div>
                        </div>
                        <FormControl
                            fullWidth
                            variant='filled'
                        >
                            <label>Re-enter password</label>
                            <FilledInput
                                id='confirmPassword'
                                name='confirmPassword'
                                type={showConfirmPassword ? 'text' : 'password'}
                                {...register("confirmPassword", { validate: (value) => value === getValues("password") || "Passwords do not match" })}
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
                            />
                            {errors.confirmPassword && <p className='pError'>{errors.confirmPassword.message}</p>}
                        </FormControl>
                        <div className='signup-checkbox'>
                            <input type="checkbox" id='notifications' required />
                            <label htmlFor="notifications">
                                I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!
                            </label>
                        </div>
                        <button className='signupBtn' type='submit'>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}