import { render, screen } from '__tests__/customRender'
import SignUp from 'screens/SignUp/SignUp'

test('render SignUp screen', () => {
  render(<SignUp />)

  expect(screen.getByText(/Join Bootcampr today./i)).toBeInTheDocument()
  expect(
    screen.getByText(/Get the experience. Get the job./i)
  ).toBeInTheDocument()
  expect(
    screen.getByAltText('A person writing in a notebook.')
  ).toBeInTheDocument()
  expect(screen.getByRole('form')).toBeInTheDocument()
})
