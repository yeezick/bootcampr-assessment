import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SignUpForm } from 'components/SignUpForm/SignUpForm'

const setup = () => {
  render(
    <MemoryRouter>
      <SignUpForm />
    </MemoryRouter>
  )
  const firstNameInput = screen.getByLabelText(/First Name/i)
  const lastNameInput = screen.getByLabelText(/Last Name/i)
  const emailInput = screen.getByLabelText(/Email address/i)
  const passwordInput = screen.getByLabelText(
    'Password (Min 8 characters, 1 upper, 1 lower, 1 number)'
  )
  const confirmPasswordInput = screen.getByLabelText('Re-enter Password')
  const checkboxInput = screen.getByLabelText(
    /I agree to receive email notification\(s\)/i
  )
  const buttonElement = screen.getByRole('button', { name: /Sign up/i })

  return {
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    checkboxInput,
    buttonElement,
  }
}

test('renders all form fields', () => {
  const {
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    checkboxInput,
    buttonElement,
  } = setup()
  expect(firstNameInput).toBeInTheDocument()
  expect(lastNameInput).toBeInTheDocument()
  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(confirmPasswordInput).toBeInTheDocument()

  expect(checkboxInput).toBeInTheDocument()
  expect(buttonElement).toBeInTheDocument()
})

test('fields are not empty', () => {
  const { firstNameInput, emailInput } = setup()

  fireEvent.change(firstNameInput, { target: { value: 'Ozge' } })
  expect((firstNameInput as HTMLInputElement).value).toBe('Ozge')

  fireEvent.change(emailInput, { target: { value: 'ozge@email.com' } })
  expect((emailInput as HTMLInputElement).value).toBe('ozge@email.com')
})

test('passwords match', () => {
  const { passwordInput, confirmPasswordInput } = setup()
  const helperText = screen.queryByText("passwords don't match")
  fireEvent.change(passwordInput, { target: { value: 'abcdeF123' } })
  fireEvent.change(confirmPasswordInput, { target: { value: 'abcdeF123' } })
  expect(helperText).not.toBeInTheDocument()
})
test('checkbox is checked', () => {
  const { checkboxInput } = setup()
  fireEvent.click(checkboxInput)
  expect((checkboxInput as HTMLInputElement).checked).toBe(true)
})

test('button is disabled when fields are empty', () => {
  const { buttonElement } = setup()
  expect(buttonElement).toBeDisabled()
})
