// PasswordInput.tsx
import React from 'react';
import eyeLock from 'assets/eye_icon.png';
import PasswordValidation from './PasswordValidation';

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  passwordVisibilty: boolean;
  togglePassword: () => void;
  regexLog:boolean;
  upperValidated:boolean;
  lowerValidated:boolean;
  numberValidated:boolean;
  lengthValidated:boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  onKeyUp,
  passwordVisibilty,
  togglePassword,
  upperValidated,
  lowerValidated,
  numberValidated,
  lengthValidated,
  regexLog,
}) => {
  return (
    <>
    <label htmlFor="password">
    Password </label>
 <br />
    <div className="password-wrapper">
      <input
        type={passwordVisibilty ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        name="password"
        id="password"
        required
      />
      <span className="eyeLock">
        <img onClick={togglePassword} src={eyeLock} alt="eye" />
      </span>
      {regexLog &&(
                <PasswordValidation
                upperValidated={upperValidated} lowerValidated={lowerValidated}
                 numberValidated={numberValidated} lengthValidated={lengthValidated}
                 />
            )}
            </div>
          </>
  );
};

export default PasswordInput;

