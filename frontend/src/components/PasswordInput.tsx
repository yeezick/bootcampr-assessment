import { useState} from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'

const PasswordInput = ({ password, handlePassword }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TextField
            required 
            id="password" 
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePassword}
            variant="filled" 
            InputProps={{ 
                disableUnderline: true,
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOffOutlined sx={{ color: 'black' }} /> : <VisibilityOutlined sx={{ color: 'black' }} />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            fullWidth
        />
    );
};

export default PasswordInput;