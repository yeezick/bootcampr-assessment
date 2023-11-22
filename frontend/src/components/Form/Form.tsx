import FormControl from '@mui/material/FormControl';
import './Form.scss'
import { TextField } from '@mui/material';

export const Form: React.FC = () => {
  return (
   <FormControl>
    <TextField variant='filled'/>
</FormControl>
  )
}
