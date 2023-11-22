// formUtils.ts
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyEmail } from 'utils/emailController';
import { postData } from 'utils/signupController';
import { validatePassword, checkPasswordStrength, PasswordStrength } from 'utils/passwordUtils';

export type FormState =  {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
}

export const useForm = () => {
  const navigate = useNavigate();

  const [log, setLog] = useState(false);
  const [regexLog, setRegexLog] = useState(false);
  const [message, setMessage] = useState('');
  const [signUpLoader, setSignUpLoader] = useState(false);
  const [errorColor, setErrorColor] = useState(false);
  const [emailLoader, setEmailLoader] = useState(false);
  const [emailLog, setEmailLog] = useState(false);
  const [emailColor, setEmailColor] = useState(false);
  const [apiResponse, setApiResponse] = useState(false);
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const [passwordColor, setPasswordColor] = useState(false);
  const [passwordVisibilty, setPasswordVisibilty] = useState(false);
  const [confirmPasswordVisibilty, setConfirmPasswordVisibilty] = useState(false);


// handling and updating input values

  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: false,
  });

  // handles Input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // handles checkbox state
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLog(false);
    setFormState({
      ...formState,
      checkbox: e.target.checked,
    });
  };

  // checks if password values matches confirmPassword
  const handlePasswordCheck = () => {
    setRegexLog(false);
    setLog(true);
    if (!validatePassword(formState.password, formState.confirmPassword)) {
      setErrorColor(true);
      setMessage('Passwords mismatch!');
    } else {
      setErrorColor(false);
      setMessage('Passwords match!');
    }
  };

  // verify email onblur of input
  const handleVerifyEmail = async () => {
    setEmailLoader(true);
    const apiResponse = await verifyEmail(formState.email);
    console.log(apiResponse);
    if (apiResponse === 'Email valid') {
      setApiResponse(true);
      setEmailColor(false);
      setEmailLog(false);
    } else {
      setEmailColor(true);
      setEmailLog(true);
      setApiResponse(false);
    }
    setEmailLoader(false);
  };

  // checks if the password value matches the confirmPassword
  const isMatched = validatePassword(formState.password, formState.confirmPassword);

    // Check if the password passes the regex matches
    const passwordMatch =lowerValidated && upperValidated && 
                      numberValidated && lengthValidated;

  useEffect(()=>{
       if(!formState.password){
        return;
       }
       if(!passwordMatch){
        setPasswordColor(true)
     }else{
       setPasswordColor(false)
     }
    },[formState.password,passwordMatch])

// performs regex validation
  const handleRegexCheck = () => {
    setRegexLog(true);
    const passwordStrength: PasswordStrength = checkPasswordStrength(formState.password);

    setLowerValidated(passwordStrength.lower);
    setUpperValidated(passwordStrength.upper);
    setNumberValidated(passwordStrength.number);
    setLengthValidated(passwordStrength.length);
  };

  // toggles password visibility for password input
  const togglePassword = () => {
    console.log('Password being toggled!');
    setPasswordVisibilty(!passwordVisibilty);
  };

  // toggles password visibility for confirmPassword input
  const toggleconfirmPassword = () => {
    setConfirmPasswordVisibilty(!confirmPasswordVisibilty);
  };

  // handles form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignUpLoader(true);
    const formData = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      password: formState.password,
    };

    const apiResponse = await postData(formData);
    console.log(apiResponse);
    navigate('/congrats-screen');
  };

  const isCompleted =
    apiResponse &&
    isMatched &&
    formState.firstName &&
    formState.lastName &&
    formState.email &&
    formState.password &&
    formState.confirmPassword &&
    formState.checkbox;

    return {
        formState, handleInputChange, handleCheckboxChange, handlePasswordCheck,
        handleVerifyEmail, handleRegexCheck, togglePassword, toggleconfirmPassword,
        handleSubmit, isCompleted, log, isMatched, regexLog, message, signUpLoader,
        errorColor, emailLoader, emailLog, emailColor, apiResponse, lowerValidated,
        upperValidated, numberValidated, lengthValidated, passwordColor,
        passwordVisibilty, confirmPasswordVisibilty, passwordMatch,
      };
      
};
