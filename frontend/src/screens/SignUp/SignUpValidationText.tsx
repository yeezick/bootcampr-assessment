import React from 'react'

function SignUpValidationText({ visibility, color, text }) {
  return (
    <div className='validation-text' style={{ display: visibility }}>
      <span style={{ color: color }}>{text}</span>
    </div>
  )
}

export default SignUpValidationText
