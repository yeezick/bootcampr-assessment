import React from 'react'

import './Post-Sign-Up.scss'

const PostSignUp: React.FC = () => {
  return (
    <div className='post-signup-container'>
      <div className='header-container'>
        <h1>Congrats on Becoming a Bootcampr.</h1>
        <p>Time for you to get that experience.</p>
      </div>
      <div className='body-container'>
        <img
          src='https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif'
          alt='A person coding GIF'
        />
      </div>
    </div>
  )
}

export default PostSignUp
