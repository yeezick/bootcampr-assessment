import React from 'react'
import './SignUp.scss'
import Checkmark from 'assets/Icon.png';

interface ValidationContainerProps {
    passwordValidation: {
        minLength: boolean,
        hasUpperCase: boolean,
        hasLowerCase: boolean,
        hasSpecialChar: boolean,
    }
}

export const ValidationContainer: React.FC<ValidationContainerProps> = ({ passwordValidation }) => {
    return (
        <div className='validation-container'>
            {passwordValidation.hasUpperCase ? <p className='hasuppercase-valid'>
                <img className="icon" alt='checkbox' src={Checkmark}></img> 1 upper
            </p> :
                <p className='hasuppercase-invalid'>
                    1 upper
                </p>}
            {passwordValidation.hasLowerCase ? <p className='haslowercase-valid'>
                <img className="icon" alt="checkbox" src={Checkmark}></img> 1 lower
            </p> :
                <p className='haslowercase-invalid'>
                    1 lower
                </p>}
            {passwordValidation.hasSpecialChar ? <p className='hasspecialchar-valid'>
                <img className="icon" alt="checkbox" src={Checkmark}></img> 1 symbol
            </p> :
                <p className='hasspecialchar-invalid'>
                    1 symbol
                </p>}
            {passwordValidation.minLength ? <p className='minchar-valid'>
                <img className="icon" alt="checkbox" src={Checkmark}></img> Min 8 characters
            </p> :
                <p className='minchar-invalid'>
                    Minimum 8 characters
                </p>}
        </div>
    )
}