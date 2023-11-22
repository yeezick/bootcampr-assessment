import React from 'react';

type CheckboxProps =  {
  disabled: boolean;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ disabled, checked, onChange }) => {
  return (
    <div className="checkbox-group">
      <input
        disabled={disabled}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name="checkbox"
        className="checkbox"
        id="checkbox"
        required
      />
      <span className="checkbox-text">
        I agree to receive email notification(s). We will only send emails with
        important information, like project start dates. We will not sell your
        information!
      </span>
    </div>
  );
};

export default Checkbox;

