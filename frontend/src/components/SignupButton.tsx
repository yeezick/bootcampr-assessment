import React from 'react'

const SignupButton = ({isCompleted,signUpLoader}) => {
  return (
    <>
     <button type="submit"
             style={{ pointerEvents: isCompleted ? 'auto' : 'none',
                     backgroundColor: isCompleted ?   '#FA9413' : '',
                     cursor:isCompleted ?'pointer':'auto',
                    transition:"all ease-in-out 300ms"
                     }}>
                      {signUpLoader ? ( <div className="loader-two"></div>):"Sign up"}
            </button>
    </>
  )
}

export default SignupButton
