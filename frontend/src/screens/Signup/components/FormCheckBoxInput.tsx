import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

interface IFormCheckBoxInputProps {
  name: string
  label: string
  value: boolean
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormCheckBoxInput: React.FC<IFormCheckBoxInputProps> = (
  props: IFormCheckBoxInputProps
) => {
  const { name, label, value, handleInputChange } = props
  return (
    <div className='signup-form-checkbox-input'>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name={name}
              checked={value}
              onChange={handleInputChange}
            />
          }
          label={label}
        />
      </FormGroup>
    </div>
  )
}

export { FormCheckBoxInput }
