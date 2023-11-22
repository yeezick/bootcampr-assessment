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

    testPasswordVisibility(/^password \(/i, /toggle password visibility/i)
  })

  test('toggles confirm password visibility', () => {
    render(<SignUp />)

    testPasswordVisibility(
      /re-enter password/i,
      /toggle confirm password visibility/i
    )
  })

  test('returns message errors when no input is typed for each form field', () => {
    render(<SignUp />)

    testEmptyFormField(/first name/i, 'First name cannot be empty.')
    testEmptyFormField(/last name/i, 'Last name cannot be empty.')
    testEmptyFormField(/email address/i, 'Email cannot be empty.')
    testEmptyFormField(/^password \(/i, 'Password cannot be empty.')
    testEmptyFormField(
      /re-enter password/i,
      'The Password entered does not match.'
    )
  })

  test('handles invalid first name', () => {
    render(<SignUp />)

    testInvalidValues(
      /first name/i,
      'invalid_111Firstname',
      'Name should only contains letters'
    )
  })

  test('handles invalid last name', () => {
    render(<SignUp />)

    testInvalidValues(
      /last name/i,
      'invalid_,101Lastname',
      'Name should only contains letters'
    )
  })

  test('handles invalid email', () => {
    render(<SignUp />)

    testInvalidValues(
      /email address/i,
      'invalid_email',
      'Invalid email address'
    )
  })

  test('checks password criteria list is initially not visible', () => {
    render(<SignUp />)

    expect(screen.queryByText('1 uppercase')).toBeNull()
    expect(screen.queryByText('1 lowercase')).toBeNull()
    expect(screen.queryByText('1 symbol')).toBeNull()
    expect(screen.queryByText('Minimum 8 characters')).toBeNull()
  })

  test('validates valid password in real-time', () => {
    render(<SignUp />)

    testPasswordValidity('TNi-_-!954', 'success')
  })

  test('validates invalid password in real-time', () => {
    render(<SignUp />)

    testPasswordValidity('1111', 'error')
  })

  test('checks password criteria list is not visible when password input is empty', () => {
    render(<SignUp />)
    const passwordInput = screen.getByLabelText(/^password \(/i)

    fireEvent.change(passwordInput, { target: { value: '' } })

    expect(screen.queryByText('1 uppercase')).toBeNull()
    expect(screen.queryByText('1 lowercase')).toBeNull()
    expect(screen.queryByText('1 symbol')).toBeNull()
    expect(screen.queryByText('Minimum 8 characters')).toBeNull()
  })

  test('handles password not matching', () => {
    render(<SignUp />)

    const passwordInput = screen.getByLabelText(/^password \(/i)
    fireEvent.change(passwordInput, { target: { value: 'TNi-_-!954' } })

    testInvalidValues(
      /re-enter password/i,
      'A_different_password',
      'The Password entered does not match.'
    )
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

const testPasswordVisibility = (label: RegExp, icon: RegExp) => {
  const passwordInput = screen.getByLabelText(label) as HTMLInputElement
  const toggleIcon = screen.getByLabelText(icon) as HTMLInputElement

  expect(passwordInput).toHaveAttribute('type', 'password')

  fireEvent.click(toggleIcon)

  expect(passwordInput).toHaveAttribute('type', 'text')

  fireEvent.click(toggleIcon)

  expect(passwordInput).toHaveAttribute('type', 'password')
}

const testPasswordValidity = (value: string, classname: string) => {
  const passwordInput = screen.getByLabelText(/^password \(/i)

  fireEvent.change(passwordInput, { target: { value: value } })

  expect(screen.getByText('1 uppercase')).toHaveClass(classname)
  expect(screen.getByText('1 lowercase')).toHaveClass(classname)
  expect(screen.getByText('1 symbol')).toHaveClass(classname)
  expect(screen.getByText('Minimum 8 characters')).toHaveClass(classname)
}
