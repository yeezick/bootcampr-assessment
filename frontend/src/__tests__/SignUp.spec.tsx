import { fireEvent, render, screen } from '__tests__/customRender'
import { act } from 'react-dom/test-utils'
import SignUp from 'screens/SignUp/SignUp'
import SignUpForm from 'screens/SignUp/SignUpForm/SignUpForm'

describe('SignUp screen', () => {
  it('renders SignUp screen', () => {
    render(<SignUp />)

    expect(screen.getByText(/join bootcampr/i)).toBeInTheDocument()
    expect(screen.getByText(/the experience/i)).toBeInTheDocument()
    expect(screen.getByAltText(/person writing/i)).toBeInTheDocument()
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('renders SignUpForm', () => {
    render(<SignUpForm />)

    expect(screen.getByLabelText(/first/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText(/re-enter/i)).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/agree to/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('submits SignUpForm with valid data', async () => {
    const { getByLabelText, getByText, getByRole } = render(<SignUpForm />)

    fireEvent.change(getByLabelText(/first/i), {
      target: { value: 'Test' },
    })
    fireEvent.change(getByLabelText(/last/i), {
      target: { value: 'User' },
    })
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: 'test@user.com' },
    })
    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'Test1234' },
    })
    fireEvent.change(getByLabelText(/re-enter/i), {
      target: { value: 'Test1234' },
    })

    fireEvent.click(getByRole('checkbox'))

    fireEvent.click(getByText(/sign up/i))

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(window.location.pathname).toBe('/congrats')

    jest.useRealTimers()
  })

  // it('renders invalid input errors', async () => {
  //   render(<SignUpForm />)

  //   act(() => {
  //     fireEvent.focus(screen.getByLabelText(/first/i))
  //   })

  //   expect(screen.getByText('First name is required')).toBeInTheDocument()
  // fireEvent.change(getByLabelText(/last/i), {
  //   target: { value: 'User' },
  // })
  // fireEvent.change(getByLabelText(/email/i), {
  //   target: { value: 'test@user.com' },
  // })
  // fireEvent.change(getByLabelText('Password'), {
  //   target: { value: 'Test1234' },
  // })
  // fireEvent.change(getByLabelText(/re-enter/i), {
  //   target: { value: 'Test1234' },
  // })

  // fireEvent.click(getByText(/sign up/i))
  // })
})
