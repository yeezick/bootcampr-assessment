import React from 'react'
import { render, screen, fireEvent } from './customRender'
import { Signup } from '../screens/Signup/Signup' // Update the import path accordingly

describe('Signup Component', () => {
  test('renders Signup screen component', () => {
    render(<Signup />)
    // Add assertions to check if the component renders correctly
    expect(screen.getByText('Join Bootcampr today.')).toBeInTheDocument()
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
    expect(
      screen.getByLabelText('Email address (ex. jeanine@bootcampr.io)')
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(
        'Password (Min 8 characters, 1 upper, 1 lower, 1 symbol)'
      )
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Re-enter password')).toBeInTheDocument()
  })

  // Add more test cases for different scenarios (e.g., invalid form input, error handling, etc.)
})
