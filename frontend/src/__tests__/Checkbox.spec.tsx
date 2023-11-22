// Checkbox.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from '../components/Checkbox';

describe('Checkbox Component', () => {
  test('renders checkbox with text', () => {
    render(<Checkbox disabled={false} checked={false} onChange={jest.fn()} />);

    // Check if the checkbox and text are present
    const checkbox = screen.getByRole('checkbox');
    const checkboxText = screen.getByText(/I agree to receive email notification/);

    expect(checkbox).toBeInTheDocument();
    expect(checkboxText).toBeInTheDocument();
  });

  test('renders checkbox as disabled', () => {
    render(<Checkbox disabled={true} checked={false} onChange={jest.fn()} />);

    // Check if the checkbox is present, and it is disabled
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeDisabled();
  });

  test('renders checkbox as checked', () => {
    render(<Checkbox disabled={false} checked={true} onChange={jest.fn()} />);

    // Check if the checkbox is present, and it is checked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });
});
