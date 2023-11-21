import React from 'react'
import './Signup.scss'
import { ReactComponent as Check } from 'assets/check-icon.svg'

interface PasswordCriteriaMetProps {
    isLengthMet: boolean;
    isUppercaseMet: boolean;
    isLowercaseMet: boolean;
    isSpecialCharMet: boolean;
  }

  const PasswordCriteriaMet: React.FC<PasswordCriteriaMetProps> = ({
    isLengthMet,
    isUppercaseMet,
    isLowercaseMet,
    isSpecialCharMet,
  }) => {
    const getCriteriaColor = (isMet: boolean) => (isMet ? '#23A6A1' : '#D90000');
  
    return (
      <div className='password-criteria-container'>
        <p style={{ color: getCriteriaColor(isUppercaseMet) }}>{isUppercaseMet && <Check />}1 uppercase</p>
        <p style={{ color: getCriteriaColor(isLowercaseMet) }}>{isLowercaseMet && <Check />}1 lowercase</p>
        <p style={{ color: getCriteriaColor(isSpecialCharMet) }}>{isSpecialCharMet && <Check />}1 symbol</p>
        <p style={{ color: getCriteriaColor(isLengthMet) }}>{isLengthMet && <Check />}Minimum 8 characters</p>
      </div>
    );
  };
  
  export default PasswordCriteriaMet;