import React, { useState } from 'react'
import { TextField } from '@mui/material';

interface FormInputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const FormField: React.FC = (props: FormInputProps) => {
  return (
    <TextField
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      variant='filled'
      size='small'
      margin='dense'
    />
  );
}