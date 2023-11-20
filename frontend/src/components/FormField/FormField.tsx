import React from 'react'
import { TextField } from '@mui/material';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  endAdornment?: React.ReactNode;
}

export const FormField: React.FC<FormInputProps> = (props) => {
  return (
    <TextField
      label={props.label}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.changeHandler}
      variant='filled'
      // size='small'
      // margin='dense'
    />
  );
}