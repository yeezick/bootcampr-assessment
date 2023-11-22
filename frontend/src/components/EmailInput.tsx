
import React from 'react';

type EmailInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  emailLoader: boolean;
  emailLog: boolean;
  emailColor: boolean;
}

const EmailInput: React.FC<EmailInputProps> = ({
  value,
  onChange,
  onBlur,
  emailLoader,
  emailLog,
  emailColor,
}) => {
  return (
    <>
      <label htmlFor="email">
        Email address <span className="email">(ex. jeanine@bootcampr.io)</span>
      </label>
      <br />
      <div className="email-wrapper">
        <input
          type="email"
          autoComplete="new-password"
          className={emailColor ? 'input-invalid' : ''}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name="email"
          id="email"
          required
        />
        {emailLoader && <div className="loader"></div>}
        {emailLog && <small className="not-validated">Email already exists!</small>}
      </div>
    </>
  );
};

export default EmailInput;
