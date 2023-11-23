import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Signup} from '../screens/signup/Signup';

test('renders the Signup screen', () => {
    render(<Signup />);

    expect(screen.getByText(/Join Bootcampr Today/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Re-enter Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/I agree to receive email notification(s)/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
});

test('shows password requirement message when password is invalid', () => {
    render(<Signup />);

    // Trigger a submit with invalid password
    fireEvent.submit(screen.getByRole('button', { name: /Sign Up/i }));

    expect(screen.getByText(/Password must have at least:/i)).toBeInTheDocument();
});

test('navigates to /congrats on successful form submission', async () => {
    render(<Signup />);

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Jeanine' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Bootcampr' } });
    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: ' jeanine@bootcampr.io' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'Holiday@ss2023' } });
    fireEvent.change(screen.getByLabelText(/Re-enter Password/i), { target: { value: 'Holiday@ss2023' } });
    fireEvent.click(screen.getByLabelText(/I agree to receive email notification(s)/i));

    fireEvent.submit(screen.getByRole('button', { name: /Sign Up/i }));

    await screen.findByText(/Enjoy the holiday season!/i);

    expect(window.location.pathname).toBe('/congrats');
});