import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'; 
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export function ShowPassword({passwordVisible, handleShowPassword}){
  return (
    <>
     <span>
        {passwordVisible ? 
        <RemoveRedEyeOutlinedIcon onClick={handleShowPassword}></RemoveRedEyeOutlinedIcon> 
        :
        <VisibilityOffOutlinedIcon onClick={handleShowPassword}></VisibilityOffOutlinedIcon>
        }     
      </span>
    </>
  )
}