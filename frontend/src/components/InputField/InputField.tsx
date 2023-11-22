import React, { useEffect, useState } from 'react'
import styles from './InputField.module.scss'

interface InputProps {
  label: string
  type: string
  identifier: string
  validityType: string
  placeholder?: string
}

const InputField: React.FC<InputProps> = props => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [inputValid, setInputValid] = useState<boolean>(true)
  const [validityState, setValidityState] = useState<boolean>(false)

  useEffect(() => {
    if (props.validityType === 'typeMismatch' && validityState) {
      setErrorMessage(`A correct '${props.label}' is required.`)
    } else {
      setErrorMessage(`'${props.label}' is required.`)
    }
  }, [validityState])

  const handleValidity = e => {
    setValidityState(e.target.validity[props.validityType])
    setInputValid(e.target.checkValidity())
  }

  return (
    <label
      className={`${styles['input-field']} ${
        inputValid ? styles['valid'] : styles['invalid']
      }`}
      htmlFor={props.identifier}
    >
      <p className={styles.label}>{props.label}</p>
      <input
        id={props.identifier}
        type={props.type}
        required
        placeholder={props.placeholder}
        onBlur={handleValidity}
      />
      <p className={styles['validation']}>{errorMessage}</p>
    </label>
  )
}

export default InputField
