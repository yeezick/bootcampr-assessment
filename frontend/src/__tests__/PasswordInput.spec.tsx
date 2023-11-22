import { render, screen, fireEvent } from '@testing-library/react';
import PasswordInput from '../components/PasswordInput';

describe('PasswordInput Component', () => {
  const mockOnChange = jest.fn();
  const mockOnKeyUp = jest.fn();
  const mockTogglePassword = jest.fn();

  test('renders PasswordInput component', () => {
    render(
      <PasswordInput
        value=""
        onChange={mockOnChange}
        onKeyUp={mockOnKeyUp}
        passwordVisibilty={false}
        togglePassword={mockTogglePassword}
        upperValidated={false}
        lowerValidated={false}
        numberValidated={false}
        lengthValidated={false}
        regexLog={false}
      />
    );

    // Check if the label, input, eyeLock icon are present
    const labelElement = screen.getByLabelText(/Password/);
    const inputElement = screen.getByLabelText(/Password/);
    const eyeLockIcon = screen.getByAltText('eye');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(eyeLockIcon).toBeInTheDocument();
  });

  test('handles input change and key up events', () => {
    render(
      <PasswordInput
        value=""
        onChange={mockOnChange}
        onKeyUp={mockOnKeyUp}
        passwordVisibilty={false}
        togglePassword={mockTogglePassword}
        upperValidated={false}
        lowerValidated={false}
        numberValidated={false}
        lengthValidated={false}
        regexLog={false}
      />
    );

    // Use fireEvent to simulate a user typing in the input
    fireEvent.change(screen.getByLabelText(/Password/), {
      target: { value: 'newPassword' },
    });

    // Check if the onChange function is called
    expect(mockOnChange).toHaveBeenCalledTimes(1);

    // Use fireEvent to simulate a key up event on the input
    fireEvent.keyUp(screen.getByLabelText(/Password/ ), {
      key: 'Enter',
      code: 'Enter',
    });

    // Check if the onKeyUp function is called
    expect(mockOnKeyUp).toHaveBeenCalledTimes(1);
  });

  test('toggles password visibility on eyeLock icon click', () => {
    render(
      <PasswordInput
        value=""
        onChange={mockOnChange}
        onKeyUp={mockOnKeyUp}
        passwordVisibilty={false}
        togglePassword={mockTogglePassword}
        upperValidated={false}
        lowerValidated={false}
        numberValidated={false}
        lengthValidated={false}
        regexLog={false}
      />
    );

    // Use fireEvent to simulate a user clicking the eyeLock icon
    fireEvent.click(screen.getByAltText('eye'));

    // Check if the togglePassword function is called
    expect(mockTogglePassword).toHaveBeenCalledTimes(1);
  });

});
