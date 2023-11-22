import React from 'react';
import { render, fireEvent, waitFor, getByTestId } from '@testing-library/react';
import { SignUpForm } from '../screens/Sign-Up/SignUpForm';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import * as sampleController from 'utils/sampleController';

jest.mock('utils/sampleController');

describe('SignUpForm Comprehensive Test Suite', () => {

  beforeEach(() => {
    (sampleController.validateEmail as jest.Mock).mockResolvedValue(false); // Mock email validation
    (sampleController.addUser as jest.Mock).mockResolvedValue({ status: 200 }); // Mock user addition
  });

  it('renders and properly responds to user interaction', async () => {
    const { getByLabelText, getByRole, getByTestId } = render(<Router><SignUpForm /></Router>);

    const checkbox = getByLabelText(/I agree to receive email notification\(s\)/i) as HTMLInputElement;

    fireEvent.change(getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(getByLabelText(/Last name/i), { target: { value: 'Doe' } });
    fireEvent.change(getByTestId('email'), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(getByTestId('password'), { target: { value: 'Password123!' } });
    fireEvent.change(getByTestId('passwordRe'), { target: { value: 'Password123!' } });
    fireEvent.click(checkbox); 
    expect(checkbox.checked)

    fireEvent.click(getByRole('button', { name: /Sign up/i }));
  });

  it('displays email validation message correctly', async () => {
    const { getByTestId, getByText } = render(<Router><SignUpForm /></Router>);

    fireEvent.change(getByTestId('email'), { target: { value: 'johndoe@example.com' } });
    fireEvent.blur(getByTestId('email')); // Triggers email validation

    await waitFor(() => {
      expect(getByText(/Must use unique email/i)).toBeInTheDocument();
    });
  });

  it('only shows password validation container when password has length', async () => {
    const { getByTestId, queryByText } = render(<Router><SignUpForm /></Router>);

    fireEvent.change(getByTestId('password'), { target: { value: 'Pass' } });
    
    await waitFor(() => {
        expect(queryByText(/Minimum 8 characters/i)).toBeInTheDocument();
    });
  });

  it('shows password match message only when both password fields are filled', () => {
    const { queryByText, getByTestId } = render(<Router><SignUpForm /></Router>);

    fireEvent.change(getByTestId('password'), { target: { value: 'Password123!' } });
    fireEvent.change(getByTestId('passwordRe'), { target: { value: '' } });
    expect(queryByText(/Passwords match/i)).not.toBeInTheDocument();

    fireEvent.change(getByTestId('passwordRe'), { target: { value: 'Password123!' } });
    expect(queryByText(/Passwords match/i)).toBeInTheDocument();
  });
})