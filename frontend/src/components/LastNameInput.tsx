// LastNameInput.tsx
import React from 'react';

type LastNameInputProps =  {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LastNameInput: React.FC<LastNameInputProps> = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="lastName">Last name</label>
      <br />
      <input
        type="text"
        value={value}
        onChange={onChange}
        name="lastName"
        id="lastName"
        required
      />
      <br />
    </>
  );
};

export default LastNameInput;
