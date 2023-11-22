    //Function uses regex to validate the password string meets necessary criteria
    //Min 8 characters, 1 uppercase, 1 lowercase, 1 special char
    export const validatePassword = (password: string) => {
        const validations = {
          minLength: password.length >= 8,
          hasLowerCase: /[a-z]/.test(password),
          hasUpperCase: /[A-Z]/.test(password),
          hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        }
    
        return validations;
      }