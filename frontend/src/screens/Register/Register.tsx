import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { sayHello } from 'utils/sampleController'
import './Register.scss'

export const Register: React.FC = () => {
const [helloResponse, setHelloResponse] = useState<string>('')

return (
    <div className='landing-container'>
    <div className='header-container'>
        <div className='header-grid'>
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

    const handleApiTestButton = async () => {
    const apiResponse = await sayHello()
    setHelloResponse(apiResponse)
    }

return (
    <div className='button-container'>
    <Button onClick={handleSignUpButton} variant='contained'>
        Start Today!
    </Button>
    <Button onClick={handleApiTestButton} variant='contained'>
        Test the API
    </Button>
    </div>
)
}