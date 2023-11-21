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
})

// helpers
const testInputChange = (label: RegExp, value: string) => {
  const input = screen.getByLabelText(label) as HTMLInputElement
  fireEvent.change(input, { target: { value } })
  expect(input.value).toBe(value)
}
