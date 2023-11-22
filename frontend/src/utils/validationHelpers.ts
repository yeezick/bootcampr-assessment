interface ValidationRule {
  error: boolean
  message: string
}

export const checkRule = (
  isValid: boolean,
  message: string
): ValidationRule => {
  return {
    error: !isValid,
    message: message,
  }
}
