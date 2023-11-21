import { render, screen } from '__tests__/customRender'
import SignUp from 'screens/SignUp/SignUp'
import SignUpForm from 'screens/SignUp/SignUpForm/SignUpForm'

describe('SignUp screen', () => {
  test('render SignUp screen', () => {
    render(<SignUp />)

    expect(screen.getByText('Join Bootcampr today.')).toBeInTheDocument()
    expect(
      screen.getByText('Get the experience. Get the job.')
    ).toBeInTheDocument()
    expect(
      screen.getByAltText('A person writing in a notebook.')
    ).toBeInTheDocument()
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  test('render SignUpForm', () => {
    render(<SignUpForm />)

    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Re-enter password')).toBeInTheDocument()
  })
})
