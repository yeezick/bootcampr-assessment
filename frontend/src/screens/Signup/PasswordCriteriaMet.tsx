import React from 'react'

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
    const getCriteriaColor = (isMet: boolean) => (isMet ? 'green' : 'red');
  
    return (
      <div>
        <p style={{ color: getCriteriaColor(isUppercaseMet) }}>1 uppercase</p>
        <p style={{ color: getCriteriaColor(isLowercaseMet) }}>1 lowercase</p>
        <p style={{ color: getCriteriaColor(isSpecialCharMet) }}>1 symbol</p>
        <p style={{ color: getCriteriaColor(isLengthMet) }}>Minimum 8 characters</p>
      </div>
    );
  };
  
  export default PasswordCriteriaMet;