import React from 'react'
import { useState, useEffect } from "react";
import './Register.scss'
import hexImage from './hex-icon.png';

export const Register: React.FC = () => {

    const initialValues = { firstname: "", lastname: "", email: "", password: "", passwordconfirmation: "" };

    const [formValues, setFormValues] = useState(initialValues);

    const [formErrors, setFormErrors] = useState({});

    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        let errors: any = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstname) {
            errors.firstname = "First name is required";
        }
        if (!values.firstname) {
            errors.lastname = "Last name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        if (!values.passwordconfirmation) {
            errors.passwordconfirmation = "Password confirmation is required";
        }
        return errors;
    };

    return (
        <div id="wrap">
            <div id="content">
                <h1>Join Bootcampr today.</h1>
                <h3>Get the experience. Get the job.</h3>
            </div>
                <div id="image-format">
                <img src={hexImage} width="303.75" height="360"/>
                </div>
            <div id="container-form">
                <form onSubmit={handleSubmit}>
                    <label>
                        <div id="form-text"><p>First name</p></div>
                        <input type="text" name="firstname"  value={formValues.firstname} onChange={handleChange} />
                    </label>
                </form>
                <div id="unify">
                    <label>
                        <div id="form-text"><p>Last name</p></div>
                        <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} />
                    </label>
                </div>
                <div id="unify">
                    <label>
                        <div id="form-text"><p>Email address (ex. jeanine@bootcampr.io)</p></div>
                        <input type="text" name="email" value={formValues.email} onChange={handleChange} />
                    </label>
                </div>
                <div id="unify">
                    <label>
                        <div id="form-text"><p>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</p></div>
                        <input type="password" name="password" value={formValues.password} onChange={handleChange} />
                        <div id="password-checklist">
                        <div style={{ color: formValues.password.search(/(?=.*[A-Z])/) == -1 ? "red" : "green" }}><p>1 uppercase</p></div>
                        <div style={{ color: formValues.password.search(/(?=.*[a-z])/) == -1 ? "red" : "green" }}><p>1 lowercase</p></div>
                        <div style={{ color: formValues.password.search(/\d/) == -1 ? "red" : "green" }}><p>1 number</p></div>
                        <div style={{ color: formValues.password.length >= 8 ? "green" : "red"}}><p>Minimum 8 characters</p></div>
                        </div>
                    </label>
                    
                </div>
                <div id="unify">
                    <label>
                        <div id="form-text"><p>Re-enter password</p></div>
                        <input type="password" name="passwordconfirmation" value={formValues.passwordconfirmation} onChange={handleChange} />
                    </label>
                </div>
                    <div id="checkbox-and-disclaimer">
                    <div id="checkbox-text"><div id="input-box"><input type="checkbox" /></div>
                        I agree to receive email notification(s). We will only
                        send emails with important information, like project start
                        dates. We will not sell your information!
                    </div>
                </div>
                <button id="sign-up-button">Sign Up</button>
            </div>
            
        </div>

        
    )
}

