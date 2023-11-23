import React from 'react'
import { TextField } from '@mui/material';
import { InputProps as MuiInputProps } from '@mui/material/Input';

interface FormInputProps {
  label: string
  name: string
  type: string
  value: string
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  endIcon?: React.ReactNode
  InputProps?: MuiInputProps;
}

export const FormField: React.FC<FormInputProps> = props => {
  return (
      <TextField
        label={props.label}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.changeHandler}
        InputProps={props.InputProps}
        variant='filled'
        size='small'
        margin='dense'
      />
  )
}
