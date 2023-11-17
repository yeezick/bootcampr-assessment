import React, { useState } from 'react'
import {
  FormControl,
  FormHelperText,
  Input,
  FormLabel,
  TextField,
  TextFieldProps,
} from '@mui/material'
import './InputField.scss'

interface TextInputProps {
  // value:
  // name:
  InputProps?: TextFieldProps['InputProps']
  helperText?: string
  type: string
  label?: string
  text?: string
  onClick?: () => void
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  helperText,
  InputProps,
}) => {
  return (
    <div className='input-box'>
      <label>{label}</label>
      <TextField
        type={type}
        variant='standard'
        helperText={helperText}
        InputProps={{
          disableUnderline: true,
          ...InputProps,
        }}
        className='input-field'
      />
    </div>
  )
}
