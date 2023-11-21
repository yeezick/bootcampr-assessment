export type PasswordStrength = {
    lower: boolean;
    upper: boolean;
    number: boolean;
    length: boolean;
  }
  
  export const validatePassword = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword;
  };
  
  export const checkPasswordStrength = (password: string): PasswordStrength => {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const length = new RegExp('(?=.{8,})');
  
    return {
      lower: lower.test(password),
      upper: upper.test(password),
      number: number.test(password),
      length: length.test(password),
    };
  };
  