import SignupButton from "./SignupButton";
import PasswordInput from "./PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import Checkbox from "./Checkbox";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import { useForm } from "utils/formUtils";


const Form = () => {

  // Imported Functions from formutils.ts
  const {
    formState, handleInputChange, handleCheckboxChange, handlePasswordCheck,
    handleVerifyEmail, handleRegexCheck, togglePassword, toggleconfirmPassword,
    handleSubmit, isCompleted, log, isMatched, regexLog, message, signUpLoader,
    errorColor, emailLoader, emailLog, emailColor, passwordMatch, lowerValidated,
    upperValidated, numberValidated, lengthValidated, passwordColor,
    passwordVisibilty, confirmPasswordVisibilty,
  } = useForm();
   
    
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
