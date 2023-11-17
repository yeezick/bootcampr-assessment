import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

interface IFormCheckBoxInputProps {
  label: string
}

const FormCheckBoxInput: React.FC<IFormCheckBoxInputProps> = (
  props: IFormCheckBoxInputProps
) => {
  const { label } = props
  return (
    <div className='signup-form-checkbox-input'>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label={label} />
      </FormGroup>
    </div>
  )
}

export { FormCheckBoxInput }
