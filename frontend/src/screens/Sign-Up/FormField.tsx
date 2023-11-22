import React from 'react'
import './SignUp.scss'

interface FormFieldProps {
    label: string;
    children?: React.ReactNode;
    type: string;
    name: string;
    onChange: (event: any) => void;
    onBlur?: (event: any) => void;
    value: string;
  }
  
  export const FormField: React.FC<FormFieldProps> = ({ label, children, type, name, onChange, onBlur, value }) => {
    return (
      <div className={`input-common`}>
        <h3 className='mini-header'>{label}</h3>
        <input
          className={`input input-${name}`}
          type={type}
          name={name}
          onChange={onChange}
          {...(onBlur && { onBlur })}
          value={value}
        />
        {children}
      </div>
    );
  }