import { FC, ChangeEvent } from 'react'
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
  const checkboxId = `checkbox-${name}`
  return (
    <FormControlLabel
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        marginTop: '0.5rem',
      }}
      control={
        <Checkbox
          required={required}
          name={name}
          checked={checked}
          onChange={onChange}
          inputProps={{ 'aria-label': checkboxId }}
          sx={{
            color: '#022888',
            '&.Mui-checked': {
              color: '#022888',
            },
          }}
        />
      }
      label={<LabelComponent label={label} id={checkboxId} />}
    />
  )
}

const LabelComponent = ({ label, id }) => {
  return (
    <Typography
      id={id}
      sx={{ marginTop: 1 }}
      variant='caption'
      display='block'
      gutterBottom
    >
      {label}
    </Typography>
  )
}
