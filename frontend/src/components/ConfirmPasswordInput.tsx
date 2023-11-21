// ConfirmPasswordInput.tsx
import React from 'react';
import eyeLock from 'assets/eye_icon.png';

type ConfirmPasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  passwordColor: boolean;
  confirmPasswordVisibilty: boolean;
  toggleconfirmPassword: () => void;
  log: boolean;
  disabled:boolean;
  errorColor: boolean;
  message: string;
}

const ConfirmPasswordInput: React.FC<ConfirmPasswordInputProps> = ({
  value,
  onChange,
  onKeyUp,
  passwordColor,
  disabled,
  confirmPasswordVisibilty,
  toggleconfirmPassword,
  log,
  errorColor,
  message,
}) => {
  return (
      <>
      <input
        disabled={disabled}
        className={passwordColor ? 'input-invalid' : ''}
        type={confirmPasswordVisibilty ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        name="confirmPassword"
        id="confirmPassword"
        required
      />
      <img
        onClick={toggleconfirmPassword}
        className="eyeLock"
        src={eyeLock}
        alt="eye"
      />
      {log && (
        <small style={{ color: errorColor ? 'red' : '#23A6A1' }}>{message}</small>
      )}
      </>
  );
};

export default ConfirmPasswordInput;
