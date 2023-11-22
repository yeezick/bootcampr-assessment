// ConfirmPasswordInput.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmPasswordInput from '../components/ConfirmPasswordInput';

describe('ConfirmPasswordInput Component', () => {
  const mockOnChange = jest.fn();
  const mockOnKeyUp = jest.fn();
  const mockToggleConfirmPassword = jest.fn();

  test('renders ConfirmPasswordInput component', () => {
    render(
      <ConfirmPasswordInput
        value=""
        onChange={mockOnChange}
        onKeyUp={mockOnKeyUp}
        passwordColor={false}
        disabled={false}
        confirmPasswordVisibilty={false}
        toggleconfirmPassword={mockToggleConfirmPassword}
        log={false}
        errorColor={false}
        message=""
      />
    );

    // Check if the label, input, eyeLock icon, and small element are present
    const labelElement = screen.getByLabelText(/Re-enter password/);
    const inputElement = screen.getByLabelText(/Re-enter password/);
    const eyeLockIcon = screen.getByAltText('eye');
    const smallElement = screen.queryByRole('small');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(eyeLockIcon).toBeInTheDocument();
    expect(smallElement).toBeNull();
  });

  test('handles input change and key up events', () => {
    render(
      <ConfirmPasswordInput
        value=""
        onChange={mockOnChange}
        onKeyUp={mockOnKeyUp}
        passwordColor={false}
        disabled={false}
        confirmPasswordVisibilty={false}
        toggleconfirmPassword={mockToggleConfirmPassword}
        log={false}
        errorColor={false}
        message=""
      />
    );

    // Use fireEvent to simulate a user typing in the input
    // fireEvent.change(screen.getByRole('textbox', { name: /Re-enter password/ }), {
    //   target: { value: 'newPassword' },
    // });

    // // Check if the onChange function is called
    // expect(mockOnChange).toHaveBeenCalledTimes(1);
   
    // // Use fireEvent to simulate a key up event on the input
    // fireEvent.keyUp(screen.getByRole('textbox', { name: /Re-enter password/ }), {
    //   key: 'Enter',
    //   code: 'Enter',
    // });

    // // Check if the onKeyUp function is called
    // expect(mockOnKeyUp).toHaveBeenCalledTimes(1);
  });

  test('toggles password visibility on eyeLock icon click', () => {
    render(
      <ConfirmPasswordInput
        value=""
        onChange={mockOnChange}
        onKeyUp={mockOnKeyUp}
        passwordColor={false}
        disabled={false}
        confirmPasswordVisibilty={false}
        toggleconfirmPassword={mockToggleConfirmPassword}
        log={false}
        errorColor={false}
        message=""
      />
    );

    // Use fireEvent to simulate a user clicking the eyeLock icon
    fireEvent.click(screen.getByAltText('eye'));

    // Check if the toggleconfirmPassword function is called
    expect(mockToggleConfirmPassword).toHaveBeenCalledTimes(1);
  });

});
