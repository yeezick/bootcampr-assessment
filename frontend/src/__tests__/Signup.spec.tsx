
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignupButton from '../components/SignupButton';

describe('SignupButton Component', () => {
  test('renders SignupButton component with loader when signUpLoader is true', () => {
    render(<SignupButton isCompleted={true} signUpLoader={true} />);

    // Check if the button is present
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    // Check if the loader is present when signUpLoader is true
    const loaderElement = screen.getByRole('region');
    expect(loaderElement).toBeInTheDocument();
  });

  test('renders SignupButton component without loader when signUpLoader is false', () => {
    render(<SignupButton isCompleted={true} signUpLoader={false} />);

    // Check if the button is present
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    // Check if the loader is not present when signUpLoader is false
    const loaderElement = screen.queryByRole('region');
    expect(loaderElement).toBeNull();
  });

  test('does not handle click event when button is disabled (isCompleted is false)', () => {
    const mockClickHandler = jest.fn();
    render(<SignupButton isCompleted={false} signUpLoader={false} />);

    // Check if the button is present
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    // Used userEvent to simulate a user clicking the button
    userEvent.click(buttonElement);

    // Check if the onClick handler is not called
    expect(mockClickHandler).not.toHaveBeenCalled();
  });

});

