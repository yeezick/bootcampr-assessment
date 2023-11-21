import { render, screen } from './customRender'
import { Landing } from 'screens/Landing/Landing'

test('renders learn react link', () => {
  render(<Landing />)
  const linkElement = screen.getByText(/surpass your/i)
  expect(linkElement).toBeInTheDocument()
})
