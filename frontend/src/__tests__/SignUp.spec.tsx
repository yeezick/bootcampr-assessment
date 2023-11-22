import {SignUp} from 'screens/SignUp/SignUp'
import { render, screen} from './customRender'

describe('SignUp component', () => {
  test('renders the SignUp component correctly', () =>{
    render(<SignUp />)

    expect(screen.getByText('Join Bootcampr today.')).toBeInTheDocument()
    expect(screen.getByText('Get the experience. Get the job.')).toBeInTheDocument()
    expect(screen.getByTestId('featuredImage')).toHaveAttribute('aria-hidden','true')
    expect(screen.getByTestId('signUpForm')).toBeInTheDocument()
  })
})