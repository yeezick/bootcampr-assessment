import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import SignInForm from 'assets/components/SignInForm'
import './SignUp.scss'
import logo from './logo.png'


export const SignUp: React.FC = () => {

  return (
    <div className='signup-container'>
      
      {/* Header Section Information */}
      <div className='header-container'>
        <div className='header-grid'>
          <h1>Join Bootcampr today.</h1>
          <p className='secondary-text'>Get the experience. Get the job.</p>
        </div>
      </div>

      {/* Main body of page - image and form */}
      <div className='body-container'>

        {/* Grid for the form and image */}
        <div className='body-grid'>

          {/* Left Side of grid */}
          <div className='img-container'>
            <img src={logo} alt='logo'/>
          </div>

          {/* Right Side of grid */}
          <div className='form-container'>
            <SignInForm/>
          </div>

        </div>

      </div>
    </div>
  )
}


// export default function SignUp() {

//   return (
//     <div className='signup-container'>
//       <div className='header-container'>
//         <div>

//         </div>

//       </div>
//       <div className='body-container'>
//         <SignInForm/>

//       </div>
//     </div>

//   )
// }
