import { FC } from 'react'
import { Button } from '@mui/material'
import './CustomButton.scss' // Import your SCSS file for styles

interface CustomButtonProps {
  text: string
  disabled?: boolean
  onClick: () => void
  type?: 'contained' | 'text' | 'outlined'
}

export const CustomButton: FC<CustomButtonProps> = ({
  text,
  disabled,
  type = 'contained',
  onClick,
}) => {
  return (
    <Button
      // className='custom-button'
      sx={{
        backgroundColor: '#fa9413',
        border: 'none',
        color: '#313335',
        fontSize: '16px',
        textTransform: 'none',
        textDecoration: 'none',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#fba52d',
          boxShadow: 'none',
        },
      }}
      onClick={onClick}
      variant={type}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}
