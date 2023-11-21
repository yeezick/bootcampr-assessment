import React, { useState,ChangeEvent, useEffect } from "react";
import { verifyEmail } from "utils/emailController";
import { postData } from "utils/signupController";
import { useNavigate } from "react-router-dom";
import SignupButton from "./SignupButton";
import PasswordInput from "./PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import Checkbox from "./Checkbox";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import { useForm } from "utils/formUtils";
import { validatePassword } from "utils/passwordUtils";


// type FormState = {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//     checkbox: boolean;
//   }

const Form = () => {

  const {
    formState,
    handleInputChange,
    handleCheckboxChange,
    handlePasswordCheck,
    handleVerifyEmail,
    handleRegexCheck,
    togglePassword,
    toggleconfirmPassword,
    handleSubmit,
    isCompleted,
    log,
    isMatched,
    regexLog,
    message,
    signUpLoader,
    errorColor,
    emailLoader,
    emailLog,
    emailColor,
    passwordMatch,
    lowerValidated,
    upperValidated,
    numberValidated,
    lengthValidated,
    passwordColor,
    passwordVisibilty,
    confirmPasswordVisibilty,
  } = useForm();
    //  const navigate = useNavigate()
    // const [ log,setLog ] = useState(false);
    // const [ regexLog,setRegexLog ] = useState(false);
    // const [ message,setMessage]= useState('');
    // const [ signUpLoader,setSignUpLoader] = useState(false);
    // const [ errorColor,setErrorColor] = useState(false);
    // const [ emailLoader,setEmailLoader ]= useState(false);
    // const [ emailLog,setEmailLog]= useState(false);
    // const [ emailColor,setEmailColor]= useState(false);
    // const [ apiResponse,setApiResponse]= useState(false);
    // const [ lowerValidated,setLowerValidated]=useState(false);
    // const [ upperValidated,setUpperValidated]=useState(false);
    // const [ numberValidated,setNumberValidated]= useState(false);
    // const [ lengthValidated,setLengthValidated]= useState(false);
    // const [ passwordColor,setPasswordColor]= useState(false);
    // const [ passwordVisibilty,setPasswordVisibilty] = useState(false)
    // const [ confirmPasswordVisibilty,setConfirmPasswordVisibilty] = useState(false)



    // const [formState, setFormState] = useState<FormState>({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     checkbox: false,
    //   });
    
    //   const handleInputChange = (
    //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    //   ) => {
       
    //     setFormState({
    //       ...formState,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
    
    //   const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setLog(false)
    //     setFormState({
    //       ...formState,
    //       checkbox: e.target.checked,
    //     });
    //   };

    //   const handlePasswordCheck=()=>{
    //       setRegexLog(false)
    //       setLog(true);
    //        if(!validatePassword){
    //         setErrorColor(true)
    //         setMessage('Passwords mismatch!')
    //        }else{
    //         setErrorColor(false)
    //         setMessage('Passwords match!')
    //        }
    //   }

    //   // Check the database to verify email onblur of input
    //   const handleVerifyEmail=async()=>{
    //     setEmailLoader(true)
    //      const apiResponse =  await verifyEmail(formState.email)
    //      console.log(apiResponse)
    //      if(apiResponse === 'Email valid'){
    //           setApiResponse(true)
    //           setEmailColor(false)
    //           setEmailLog(false)
    //         }else{
    //           setEmailColor(true)
    //           setEmailLog(true)
    //           setApiResponse(false)
    //     }
    //     setEmailLoader(false)
    //   }

    //   // check if Password Matches
    //   const validatePassword = formState.password === formState.confirmPassword;

    //    // Check if the password passes the regex matches
    // const isMatched =lowerValidated && upperValidated && 
    //                   numberValidated && lengthValidated;

    // // update confirm password input state based on password regex passes
    // 

    //   const handleRegexCheck=()=>{
    //     setRegexLog(true);
    //     const lower = new RegExp('(?=.*[a-z])');
    //     const upper = new RegExp('(?=.*[A-Z])');
    //     const number = new RegExp('(?=.*[0-9])');
    //     const length = new RegExp('(?=.{8,})');

    //     // lowercase validation
    //     if( lower.test(formState.password)){
    //           setLowerValidated(true)
    //     }else{
    //          setLowerValidated(false)
    //     }

    //     // uppercase validation
    //     if(upper.test(formState.password)){
    //       setUpperValidated(true)
    //     }else{
    //       setUpperValidated(false)
    //     }

    //     // number validation
    //     if(number.test(formState.password)){
    //       setNumberValidated(true)
    //     }else{
    //       setNumberValidated(false)
    //     }

    //      // length validation
    //      if(length.test(formState.password)){
    //       setLengthValidated(true)
    //     }else{
    //       setLengthValidated(false)
    //     }

    //   }

    //   const togglePassword=()=>{
    //       console.log('Password being toggled!')
    //       setPasswordVisibilty(!passwordVisibilty)
    //   }

    //   const toggleconfirmPassword=()=>{
    //     setConfirmPasswordVisibilty(!confirmPasswordVisibilty)
      
    // }

    // // Handle submission for form
    //  const handleSubmit=async(e:React.FormEvent)=>{
    //   e.preventDefault()
    //   setSignUpLoader(true)
    //   const formData = {  firstName:formState.firstName,
    //                       lastName:formState.lastName,
    //                       email:formState.email,
    //                       password:formState.password}
      
    //    const apiResponse =  await postData(formData)
    //    console.log(apiResponse)
    //    navigate('/congrats-screen')
    //  }

    // // Check if all Form Input have been filled
    // const isCompleted =  apiResponse && isMatched && formState.firstName && formState.lastName &&
    //                     formState.email && formState.password && 
    //                     formState.confirmPassword && formState.checkbox;

    
  return (
       <>
         <form autoComplete="off"  onSubmit={handleSubmit}>
          <FirstNameInput value={formState.firstName} onChange={handleInputChange} />
          <LastNameInput value={formState.lastName} onChange={handleInputChange} />
            <EmailInput
            value={formState.email}
            onChange={handleInputChange}
            onBlur={handleVerifyEmail}
            emailLoader={emailLoader}
            emailLog={emailLog}
            emailColor={emailColor}
          />
            <PasswordInput
            value={formState.password}
            onChange={handleInputChange}
            onKeyUp={handleRegexCheck}
            passwordVisibilty={passwordVisibilty}
            togglePassword={togglePassword}
            upperValidated={upperValidated}
            lowerValidated={lowerValidated}
            numberValidated={numberValidated}
            lengthValidated={lengthValidated}
            regexLog={regexLog}
          />
            <ConfirmPasswordInput
              value={formState.confirmPassword}
              onChange={handleInputChange}
              onKeyUp={handlePasswordCheck}
              passwordColor={passwordColor}
              confirmPasswordVisibilty={confirmPasswordVisibilty}
              toggleconfirmPassword={toggleconfirmPassword}
              log={log}
              errorColor={errorColor}
              message={message}
              disabled={!passwordMatch}
            />
            <Checkbox
              disabled={!isMatched}
              checked={formState.checkbox}
              onChange={handleCheckboxChange}
            />
             <SignupButton isCompleted={isCompleted} signUpLoader={signUpLoader}/>
          </form>
       </>
  )
}

export default Form ;
