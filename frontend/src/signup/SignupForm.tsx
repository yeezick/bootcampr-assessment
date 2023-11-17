import { useState } from 'react'
import './SignupForm.scss'

export const SignupForm = (props:any) => {
  const [formData, setFormData ] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password:""
  })
  const [showValidation, setShowValidation] = useState(false)

  function handleFormChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function validatePassword(){
    setShowValidation(true)
  }

  return (
    <div className="signup-form-container">
      <form className="signup-form">
        <div className="input-divs">
          <label>First name</label>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleFormChange} />
        </div>
        <div className="input-divs">
        <label>Last name</label>
        <input type="text" name="lastname" value={formData.lastname} onChange={handleFormChange}/>
        </div>
        <div className="input-divs">
        <label>Email address (ex: jeannine@bootcampr.io)</label>
        <input type="email" name="email" value={formData.email} onChange={handleFormChange} />
        </div>
        <div className="input-divs">
        <label>Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)</label>
        <input type="password" name="password" value={formData.password} onChange={handleFormChange} onKeyUp={validatePassword}/>
        {showValidation? <p>Enter password</p>: null}
        </div>
        <div className="input-divs" style={{marginBottom: '0px'}}>
        <label>Re-enter password</label>
        <input type="password" name="password2" />
        </div>
        <div className='checkbox-div'>
        <input type="checkbox"/>
        <p>I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!</p>
        </div>
        <input type="submit" value="Sign up" className='submit-button'/>
      </form>
    </div>
  )
}