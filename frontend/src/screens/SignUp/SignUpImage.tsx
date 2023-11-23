import React from 'react'

function SignUpImage({image}) {
  return (
    <div className='image-container'>
      <img className='notes-hexagon' src={image} alt='Notetaker' />
    </div>
  )
}

export default SignUpImage