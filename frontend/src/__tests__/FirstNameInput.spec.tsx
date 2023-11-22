
import { render, screen, fireEvent } from '@testing-library/react';
import FirstNameInput from '../components/FirstNameInput';

describe('FirstNameInput Component', () => {
  const mockOnChange = jest.fn();

  test('renders FirstNameInput component', () => {
    render(<FirstNameInput value="" onChange={mockOnChange} />);

    // Check if the label and input are present
    const labelElement = screen.getByLabelText(/First name/);
    const inputElement = screen.getByRole('textbox', { name: /First name/ });

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<FirstNameInput value="" onChange={mockOnChange} />);

    // Used fireEvent to simulate a user typing in the input
    fireEvent.change(screen.getByRole('textbox', { name: /First name/ }), {
      target: { value: 'John' },
    });

    // Check if the onChange function is called
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });


});
