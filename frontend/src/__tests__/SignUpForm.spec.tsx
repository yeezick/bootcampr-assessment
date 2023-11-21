import { SignUp } from 'screens/SignUp/SignUp'
import { render, screen, fireEvent } from './customRender'

describe('SignUpForm', () => {
  test('renders form fields and the button submit', () => {
    render(<SignUp />)

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(
        /Password \(Minimum 8 characters, 1 uppercase, 1 lowercase, 1 symbol\)/i
      )
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/re-enter password/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/I agree to receive email notification/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  test('handles input change for each form field', () => {
    render(<SignUp />)

    testInputChange(/first name/i, 'Tao')
    testInputChange(/last name/i, 'Noblesse')
    testInputChange(/email address/i, 'tao.noblesse@test.io')
    testInputChange(/^password \(/i, 'TNi-_-!954')
    testInputChange(/re-enter password/i, 'TNi-_-!954')
  })

  test('toggles password visibility', () => {
    render(<SignUp />)

    const passwordInput = screen.getByLabelText(/^password \(/i)
    const toggleIcon = screen.getByLabelText(/toggle password visibility/i)

    expect(passwordInput).toHaveAttribute('type', 'password')

    fireEvent.click(toggleIcon)

    expect(passwordInput).toHaveAttribute('type', 'text')

    fireEvent.click(toggleIcon)

    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  test('toggles confirm password visibility', () => {
    render(<SignUp />)

    const confirmPasswordInput = screen.getByLabelText(/re-enter password/i)
    const toggleIcon = screen.getByLabelText(
      /toggle confirm password visibility/i
    )

    expect(confirmPasswordInput).toHaveAttribute('type', 'password')

    fireEvent.click(toggleIcon)

    expect(confirmPasswordInput).toHaveAttribute('type', 'text')

    fireEvent.click(toggleIcon)

    expect(confirmPasswordInput).toHaveAttribute('type', 'password')
  })

  test('returns message errors when no input is typed for each form field', () => {
    render(<SignUp />)

    testEmptyFormField(/first name/i, 'First name cannot be empty.')
    testEmptyFormField(/last name/i, 'Last name cannot be empty.')
    testEmptyFormField(/email address/i, 'Invalid email address')
    testEmptyFormField(/^password \(/i, 'Password cannot be empty.')
    testEmptyFormField(
      /re-enter password/i,
      'The Password entered does not match.'
    )
  })

  test('handles invalid email', () => {
    render(<SignUp />)

    testInvalidValues(/email address/i, 'invalid_email', 'Invalid email address')
  })

  test('handles password not matching', () => {
    render(<SignUp />)

    const passwordInput = screen.getByLabelText(/^password \(/i)
    fireEvent.change(passwordInput, {target: {value: 'TNi-_-!954'}})

    testInvalidValues(/re-enter password/i, 'A_different_password', 'The Password entered does not match.')
  })
})

// helpers
const testInputChange = (label: RegExp, value: string) => {
  const input = screen.getByLabelText(label) as HTMLInputElement
  fireEvent.change(input, { target: { value } })
  expect(input.value).toBe(value)
}

const testEmptyFormField = (label: RegExp, messageError: string) => {
  const input = screen.getByLabelText(label) as HTMLInputElement
  fireEvent.blur(input)
  expect(screen.getByText(messageError)).toBeInTheDocument()
}

const testInvalidValues = (
  label: RegExp,
  value: string,
  messageError: string
) => {
  const input = screen.getByLabelText(label) as HTMLInputElement
  fireEvent.change(input, { target: { value } })
  fireEvent.blur(input)
  expect(screen.getByText(messageError)).toBeInTheDocument()
}
