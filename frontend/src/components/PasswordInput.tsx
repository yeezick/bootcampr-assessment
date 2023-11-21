// PasswordInput.tsx
import React from 'react';
import eyeLock from 'assets/eye_icon.png';

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  passwordVisibilty: boolean;
  togglePassword: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  onKeyUp,
  passwordVisibilty,
  togglePassword,
}) => {
  return (
      <>
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
      </>
  );
};

export default PasswordInput;

