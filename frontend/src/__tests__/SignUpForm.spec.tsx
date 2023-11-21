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
    
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email address/i)
    const passwordInput = screen.getByLabelText(/^password \(/i)
    const confirmPasswordInput = screen.getByLabelText(/re-enter password/i)

    fireEvent.blur(firstNameInput)
    fireEvent.blur(lastNameInput)
    fireEvent.blur(emailInput)
    fireEvent.blur(passwordInput)
    fireEvent.blur(confirmPasswordInput)

    expect(screen.getByText(/First name cannot be empty./))
    expect(screen.getByText(/Last name cannot be empty./))
    expect(screen.getByText(/Invalid email address/))
    expect(screen.getByText(/Password cannot be empty./))
    expect(screen.getByText(/The Password entered does not match./))
  })
})

// helpers
const testInputChange = (label: RegExp, value: string) => {
  const input = screen.getByLabelText(label) as HTMLInputElement
  fireEvent.change(input, { target: { value } })
  expect(input.value).toBe(value)
}
