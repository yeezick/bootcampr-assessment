import { SignUp } from 'screens/SignUp/SignUp'
import { render, screen } from './customRender'

describe('SignUpForm', () => {
  test('renders form fields and the button submit', () => {
    render(<SignUp />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/re-enter password/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/email notification agreement/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })
})
