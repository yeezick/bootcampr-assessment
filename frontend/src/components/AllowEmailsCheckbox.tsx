import { useState} from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

const AllowEmailsCheckbox = ({ allowEmails, handleAllowEmails }) => {

    return (
        <FormControlLabel control={
            <Checkbox 
                value="allowEmails"
                onClick={handleAllowEmails}
                sx={{
                    color: '#022888',
                    borderRadius: '50',
                    marginBlockEnd: '60px',
                    marginRight: '10px',
                    marginLeft: '5px',
                    transform: 'scale(1.2)',
                    stroke: '#ffffff',
                    strokeWidth: '1.1'
                }} 
            />} 
            label="I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!" 
            labelPlacement="end"
            sx={{
                marginBlockStart: '30px',
                marginBlockEnd: '30px'
            }} 
        />
    );
};

export default AllowEmailsCheckbox;