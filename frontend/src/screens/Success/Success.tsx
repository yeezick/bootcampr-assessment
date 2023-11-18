import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import './Success.scss'

export const Success: React.FC = () => {
  const [helloResponse, setHelloResponse] = useState<string>('')

  return (
    <div className='landing-container'>
      <div className='header-container'>
        <div className='header-grid'>
          <h1>SUCCESSFUL USER SIGNUP!</h1>
          <p>
            A platform to collaborate on real-world projects! Don't wait to
            build your development experience.
          </p>
          <ButtonContainer setHelloResponse={setHelloResponse} />
          {helloResponse !== '' && helloResponse}
        </div>
      </div>
    </div>
  )
}

const ButtonContainer = ({ setHelloResponse }) => {
  const navigate = useNavigate()
  const handleSignUpButton = () => {
    navigate('/sign-up')
  }

  // const handleApiTestButton = async () => {
  //   const apiResponse = await sayHello()
  //   setHelloResponse(apiResponse)
  // }

  return (
    <div className='button-container'>
      <Button onClick={handleSignUpButton} variant='contained'>
        Start Today!
      </Button>
      <Button onClick={() => {}} variant='contained'>
        Test the API
      </Button>
    </div>
  )
}
