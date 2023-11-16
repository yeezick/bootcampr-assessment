import { useState} from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'

const RePasswordInput = ({ repassword, handleRePassword }) => {

    const [showRePassword, setShowRePassword] = useState(false);

    const handleClickShowRePassword = () => {
        setShowRePassword(!showRePassword);
    };

    return (
        <TextField
            required 
            id="repassword" 
            type={showRePassword ? "text" : "password"}
            value={repassword}
            onChange={handleRePassword}
            variant="filled" 
            InputProps={{ 
                disableUnderline: true,
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle re-entered password visibility"
                            onClick={handleClickShowRePassword}
                            edge="end"
                        >
                            {showRePassword ? <VisibilityOffOutlined sx={{ color: 'black' }} /> : <VisibilityOutlined sx={{ color: 'black' }} />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            fullWidth
        />
    );
};

export default RePasswordInput;