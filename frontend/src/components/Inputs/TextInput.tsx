import { ChangeEvent, FocusEvent, FC } from 'react'
import { FormHelperText, TextField, TextFieldProps } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import './InputField.scss'

interface TextInputProps {
  InputProps?: TextFieldProps['InputProps']
  helperText?: {
    error: boolean
    message: string
  }[]
  type: string
  value: string
  name: string
  label?: string
  required?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
}

export const TextInput: FC<TextInputProps> = ({
  label,
  type,
  name,
  value,
  helperText,
  InputProps,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <div className='input-box'>
      <label>{label}</label>
      <TextField
        type={type}
        value={value}
        name={name}
        id={name}
        variant='standard'
        InputProps={{
          disableUnderline: true,
          ...InputProps,
        }}
        autoComplete='off'
        onChange={onChange}
        onBlur={onBlur}
        className='input-field'
        {...props}
      />
      {helperText?.map(helperText => {
        if (!helperText.message.length) {
          return null
        }
        const error = helperText.error ? 'error' : 'success'
        return (
          <FormHelperText className={`helper-text ${error}`}>
            {helperText.error ? (
              <CloseIcon fontSize='small' />
            ) : (
              <CheckIcon fontSize='small' />
            )}
            {helperText.message}
          </FormHelperText>
        )
      })}
    </div>
  )
}
