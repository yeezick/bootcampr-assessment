import React from 'react'
import Confetti from 'components/Confetti/Confetti'
import './Post-Sign-Up.scss'

const PostSignUp: React.FC = () => {
  return (
    <div className='post-signup-container'>
      <div className='header-container'>
        <h1>You have successfully signed up.</h1>
        <p>Next Step: Please Verify Your Email (not really)</p>
      </div>
      <Confetti />
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
