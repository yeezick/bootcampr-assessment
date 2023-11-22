// LastNameInput.test.tsx
import { render, screen,fireEvent } from '@testing-library/react';
import LastNameInput from '../components/LastNameInput';

describe('LastNameInput Component', () => {
  const mockOnChange = jest.fn();

  test('renders LastNameInput component', () => {
    render(<LastNameInput value="" onChange={mockOnChange} />);

    // Check if the label and input are present
    const labelElement = screen.getByLabelText(/Last name/);
    const inputElement = screen.getByRole('textbox', { name: /Last name/ });

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<LastNameInput value="" onChange={mockOnChange} />);

    // Use fireEvent to simulate a user typing in the input
    fireEvent.change(screen.getByRole('textbox', { name: /Last name/ }), {
      target: { value: 'Doe' },
    });

    // Check if the onChange function is called
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

 
});

