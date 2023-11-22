
import React from 'react';

type FirstNameInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FirstNameInput: React.FC<FirstNameInputProps> = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="firstName">First name</label>
      <br />
      <input
        type="text"
        value={value}
        onChange={onChange}
        name="firstName"
        id="firstName"
        required
      />
      <br />
    </>
  );
};

export default FirstNameInput;
