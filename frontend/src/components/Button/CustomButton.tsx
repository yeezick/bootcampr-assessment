import React, { useState } from 'react'
import { Button } from '@mui/material'
import './CustomButton.scss' // Import your SCSS file for styles

interface CustomButtonProps {
  text: string
  onClick: () => void
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <Button className='custom-button' onClick={onClick}>
      {text}
    </Button>
  )
}
