import { useState} from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'

const PasswordAgainInput = ({ passwordAgain, handlePasswordAgain }) => {

    const [showPasswordAgain, setShowPasswordAgain] = useState(false);

    const handleClickShowPasswordAgain = () => {
        setShowPasswordAgain(!showPasswordAgain);
    };

    return (
        <TextField
            required 
            id="passwordAgain" 
            type={showPasswordAgain ? "text" : "password"}
            value={passwordAgain}
            onChange={handlePasswordAgain}
            variant="filled" 
            InputProps={{ 
                disableUnderline: true,
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle re-entered password visibility"
                            onClick={handleClickShowPasswordAgain}
                            edge="end"
                        >
                            {showPasswordAgain ? <VisibilityOffOutlined sx={{ color: 'black' }} /> : <VisibilityOutlined sx={{ color: 'black' }} />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            fullWidth
        />
    );
};

export default PasswordAgainInput;