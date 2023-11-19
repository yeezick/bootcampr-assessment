import { useState,ChangeEvent, useRef } from "react";
import eyeLock from 'assets/eye_icon.png'


type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    checkbox: boolean;
  }

const Form = () => {
    const toggleRef = useRef<HTMLInputElement>(null);
    const toggleRef2 = useRef<HTMLInputElement>(null);
    const [ log,setLog ] = useState(false)
    const [ regexLog,setRegexLog ] = useState(false)
    const [ message,setMessage]= useState('')
    const [ errorColor,setErrorColor] = useState(false)


    const [formState, setFormState] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        checkbox: false,
      });
    
      const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
       
        setFormState({
          ...formState,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({
          ...formState,
          checkbox: e.target.checked,
        });
      };

      const handlePasswordCheck=()=>{
          setLog(true);
           if(formState.password !== formState.confirmPassword){
            setErrorColor(true)
            setMessage('Passwords mismatch!')
           }else{
            setErrorColor(false)
            setMessage('Passwords match!')
           }
      }

      const togglePassword=()=>{
          const checked =  toggleRef.current ;
          if(checked.type === 'password'){
            checked.type='text';
          }else{
            checked.type='password';
          }
        
      }
      const togglePassword2=()=>{
        const checked =  toggleRef2.current ;
        if(checked.type === 'password'){
          checked.type='text';
        }else{
          checked.type='password';
        }
      
    }

    // Check if all Form Input have been filled
    const isCompleted = formState.firstName && formState.lastName &&
                        formState.email && formState.password && 
                        formState.confirmPassword && formState.checkbox;
      console.log(formState);
      console.log("isCompleted:", isCompleted)

    
  return (
       <>
         <form action="">
            <label htmlFor="firstName">First name</label>
            <br />
            <input
              type="text"
              value={formState.firstName}
              onChange={handleInputChange}
              name="firstName"
              id="firstName"
            />
            <br />

            <label htmlFor="lastName">Last name</label>
            <br />
            <input
              type="text"
              value={formState.lastName}
              onChange={handleInputChange}
              name="lastName"
              id="lastName"
            />
            <br />

            <label htmlFor="email">
              Email address{' '}
              <span className="email">(ex. jeanine@bootcampr.io)</span>
            </label>
            <br />
            <input
              type="email"
              value={formState.email}
              onChange={handleInputChange}
              name="email"
              id="email"
            />
            <br />

            <label htmlFor="password">
              Password{' '}
              <span className="password">
                (Min 8 characters, 1 upper, 1 lower, 1 symbol)
              </span>
            </label>
            <br />
            <div className="password-wrapper">
            <input
              type="password"
              ref={toggleRef}
              value={formState.password}
              onChange={handleInputChange}
              name="password"
              id="password"
            />
              <img  onClick={togglePassword} className='eyeLock' src={eyeLock} alt="eye" />
              {regexLog &&(
              <div className="message-log">
                 <small>1 uppercase</small>
                 <small>1 lowercase</small>
                 <small>1 number</small>

                </div>)}
            </div>

            <label htmlFor="confirmPassword">Re-enter password</label>
            <br />
            <div className="password-wrapper">
            <input
              type="password"
              ref={toggleRef2}
              value={formState.confirmPassword}
              onChange={handleInputChange}
              onKeyUp={handlePasswordCheck}
              name="confirmPassword"
              id="confirmPassword"
            />
              <img onClick={togglePassword2} className='eyeLock' src={eyeLock} alt="eye" />
           { log && <small style={{color:errorColor?'red' :' #23A6A1'}}>{message}</small>}
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                checked={formState.checkbox}
                onChange={handleCheckboxChange}
                name="checkbox"
                className="checkbox"
                id="checkbox"
              />
              <span className="checkbox-text">
                I agree to receive email notification(s). We will only send
                emails with important information, like project start dates. We
                will not sell your information!
              </span>
            </div>
            <button type="submit"
             style={{ pointerEvents: isCompleted ? 'auto' : 'none',
                     backgroundColor: isCompleted ?   '#FA9413' : '',
                     cursor:isCompleted ?'pointer':'auto',
                    transition:"all ease-in-out 300ms"
                     }}>
            Sign Up
            </button>

          </form>
       </>
  )
}

export default Form
