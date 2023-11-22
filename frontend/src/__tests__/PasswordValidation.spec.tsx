import { render, screen } from '@testing-library/react';
import PasswordValidation from '../components/PasswordValidation';

describe('PasswordValidation Component', () => {
  test('renders PasswordValidation component with default values', () => {
    render(<PasswordValidation 
      upperValidated={false}
      lowerValidated={false}
      numberValidated={false}
      lengthValidated={false}
    />);

    // Check if all elements are rendered with not-validated class
    const upperElement = screen.getByText('1 uppercase');
    const lowerElement = screen.getByText('1 lowercase');
    const numberElement = screen.getByText('1 number');
    const lengthElement = screen.getByText('Minimum 8 characters');

    expect(upperElement).toBeInTheDocument();
    expect(upperElement).toHaveClass('not-validated');
    expect(lowerElement).toBeInTheDocument();
    expect(lowerElement).toHaveClass('not-validated');
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveClass('not-validated');
    expect(lengthElement).toBeInTheDocument();
    expect(lengthElement).toHaveClass('not-validated');
  });

  test('renders PasswordValidation component with all validations', () => {
    render(<PasswordValidation 
      upperValidated={true}
      lowerValidated={true}
      numberValidated={true}
      lengthValidated={true}
    />);

    // Check if all  elements are rendered with validated class
    const upperElement = screen.getByText('1 uppercase');
    const lowerElement = screen.getByText('1 lowercase');
    const numberElement = screen.getByText('1 number');
    const lengthElement = screen.getByText('Minimum 8 characters');

    expect(upperElement).toBeInTheDocument();
    expect(upperElement).toHaveClass('validated');
    expect(lowerElement).toBeInTheDocument();
    expect(lowerElement).toHaveClass('validated');
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveClass('validated');
    expect(lengthElement).toBeInTheDocument();
    expect(lengthElement).toHaveClass('validated');
  });

});
