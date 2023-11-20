import React, { useEffect, useState } from 'react'
import './InputField.scss'

interface InputProps {
  label: string
  type: string
  identifier: string
  placeholder?: string
}

const InputField: React.FC<InputProps> = props => {
  const [errorMessage, setErrorMessage] = useState<string>('false')
  const [inputValid, setInputValid] = useState<boolean>(true)
  const [validityState, setValidityState] = useState<boolean>(true)

  useEffect(() => {
    // Custom Validity Logic
    if (validityState) {
      setErrorMessage(`'${props.label}' is required.`)
    }
  }, [validityState])

  const handleValidity = e => {
    setValidityState(e.target.validity.valueMissing)
    setInputValid(e.target.checkValidity())
  }

  return (
    <label
      className={inputValid ? 'valid' : 'invalid'}
      htmlFor={props.identifier}
    >
      <p>{props.label}</p>
      <input
        id={props.identifier}
        type={props.type}
        required
        placeholder={props.placeholder}
        onBlur={handleValidity}
      />
      <p className='error-message'>{errorMessage}</p>
    </label>
  )
}

export default InputField
