// EmailInput.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EmailInput from '../components/EmailInput';

describe('EmailInput Component', () => {
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();

  test('renders EmailInput component', () => {
    render(
      <EmailInput
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        emailLoader={false}
        emailLog={false}
        emailColor={false}
      />
    );

    // Check if the label, input, hint, loader, and validation message are present
    const labelElement = screen.getByLabelText(/Email address/);
    const hintElement = screen.getByText(/(ex. jeanine@bootcampr.io)/);
    const inputElement = screen.getByRole('textbox', { name: /Email address/ });

    expect(labelElement).toBeInTheDocument();
    expect(hintElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(
      <EmailInput
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        emailLoader={false}
        emailLog={false}
        emailColor={false}
      />
    );

    // Use fireEvent to simulate a user typing in the input
    fireEvent.change(screen.getByRole('textbox', { name: /Email address/ }), {
      target: { value: 'test@example.com' },
    });

    // Check if the onChange function is called
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('handles blur event', () => {
    render(
      <EmailInput
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        emailLoader={false}
        emailLog={false}
        emailColor={false}
      />
    );

    // Use fireEvent to simulate a blur event on the input
    fireEvent.blur(screen.getByRole('textbox', { name: /Email address/ }));

    // Check if the onBlur function is called
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  
  test('renders not-validated message when emailLog is true', () => {
    render(
      <EmailInput
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        emailLoader={false}
        emailLog={true}
        emailColor={false}
      />
    );

    // Check if the not-validated message is rendered
    const messageElement = screen.getByText('Email already exists!');
    expect(messageElement).toBeInTheDocument();
  });

  test('renders input as invalid when emailColor is true', () => {
    render(
      <EmailInput
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        emailLoader={false}
        emailLog={false}
        emailColor={true}
      />
    );

    // Check if the input has the 'input-invalid' class
    const inputElement = screen.getByRole('textbox', { name: /Email address/ });
    expect(inputElement).toHaveClass('input-invalid');
  });

});
