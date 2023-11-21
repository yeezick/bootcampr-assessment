import { useState, FC, ChangeEvent } from 'react'
import { FormControlLabel, Checkbox, Typography } from '@mui/material'
import './InputField.scss'

interface CheckboxProps {
  label?: string
  name?: string
  required?: boolean
  checked?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
}
//NOTE: Couldn't figure out how to align checkbox with multiline label so i used inline css
export const CheckboxControl: FC<CheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
  required,
}) => {
  return (
    <FormControlLabel
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
      }}
      control={
        <Checkbox
          required={required}
          name={name}
          checked={checked}
          onChange={onChange}
          // inputProps={'aria-label': 'checkbox'}
          sx={{
            color: '#022888',
            '&.Mui-checked': {
              color: '#022888',
            },
          }}
        />
      }
      label={<LabelComponent label={label} />}
    />
  )
}

const LabelComponent = ({ label }) => {
  return (
    <Typography
      sx={{ marginTop: 1 }}
      variant='caption'
      display='block'
      gutterBottom
    >
      {label}
    </Typography>
  )
}
