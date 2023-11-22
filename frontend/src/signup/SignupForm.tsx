import { useEffect, useState } from 'react'
import './SignupForm.scss'
import { useNavigate } from 'react-router-dom'

export const SignupForm = (props:any) => {
  const [formData, setFormData ] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password:"",
    passwordTwo:"",
    checked: false
  })

  //password requirement checklist 
  const [showValidation, setShowValidation] = useState(false)
  const [ upperCase, setUpperCase] = useState(false)
  const [ lowerCase, setLowerCase] = useState(false)
  const [ specialChar, setSpecialChar] = useState(false)
  const [ requiredLength, setRequiredLength] = useState(false)
  const [ validPassword, setValidPassword ] = useState(false)
  //first password and second password validation 
  const [ passwordMatch, setPasswordMatch ] = useState(false)
  //all form requirements are completed
  const [ formInvalid, setFormInvalid ] = useState(true)

  const navigate = useNavigate();

  function handleFormChange(event) {
    //checkbox or all other inputs
    if(event.target.name !== "checked"){
      setFormData({...formData, [event.target.name]: event.target.value})
    } else {
      setFormData({...formData, [event.target.name]: event.target.checked})
    }
    //password validations - uppercase, lowercase, special char, and length > 8
    if(event.target.name === 'password'){
      let pass = event.target.value

      pass.toLowerCase() !== pass ? setUpperCase(true) : setUpperCase(false)
      pass.toUpperCase() !== pass ? setLowerCase(true) : setLowerCase(false)
      pass.length >= 8 ? setRequiredLength(true) : setRequiredLength(false)

      if(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(pass)){
        setSpecialChar(true)
      } else{
        setSpecialChar(false)
      }
    }
    
    upperCase && lowerCase && specialChar && requiredLength ? setValidPassword(true) : setValidPassword(false)  
  }

  useEffect(() => {
    validPassword && formData.passwordTwo === formData.password ? setPasswordMatch(true) : setPasswordMatch(false)
    
    if(passwordMatch && 
      formData.firstname.length > 0 && 
      formData.lastname.length > 0 && 
      formData.email.length > 0 && 
      formData.checked)
    {
      setFormInvalid(false)
    } else {
      setFormInvalid(true)
    }
  }, [passwordMatch, formData]) 

  function handleSubmit(event){
    event.preventDefault()
    navigate('/login')
  }

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
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
          <input type="password" name="password" value={formData.password} onChange={handleFormChange} onSelect={() => setShowValidation(true)}/>
          {showValidation?
          <div className='password-validations'>
            <p style={{color: upperCase ? '#23A6A1' : 'red' }}>1 uppercase</p>
            <p style={{color: lowerCase ? '#23A6A1' : 'red' }}>1 lowercase</p>
            <p style={{color: specialChar ? '#23A6A1' : 'red' }}>1 symbol</p>
            <p style={{color: requiredLength ? '#23A6A1' : 'red' }}>Minimum 8 characters</p>
          </div>
          :
          null} 
        </div>
        <div className="input-divs" style={{marginBottom: '0px'}}>
          <label>Re-enter password</label>
          <input type="password" name="passwordTwo" onChange={handleFormChange} onSelect={() => setShowValidation(false)}/>
          {passwordMatch ?
          <div className="password-validations">
            <p>Passwords match!</p>
          </div>
          :
          null
          }
        </div>
        <div className='checkbox-div'>
          <input type="checkbox" name="checked" checked={formData.checked} onChange={handleFormChange}/>
          <p>I agree to receive email notification(s). We will only send emails with important information, like project start dates. We will not sell your information!</p>
        </div>
        <input type="submit" value="Sign up" disabled={formInvalid} className='submit-button'/>
      </form>
    </div>
  )
}