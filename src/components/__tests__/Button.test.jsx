import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Button from '../Button';
import UserIcon from '../UserIcon';

jest.mock('../UserIcon', () => ({ size }) => <div data-testid="user-icon" style={{ width: size, height: size }}></div>);

describe('Button', () => {
  it('renders the button with the correct label and default icon', async () => {
    await act(async () => {
      render(<Button label="Click Me" onClick={() => {}} />);
    });

    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
  });

  it('renders the button with an icon when provided', async () => {
    await act(async () => {
      render(<Button label="Click Me" onClick={() => {}} icon="/path/to/icon.svg" />);
    });

    const icon = screen.getByAltText('Click Me-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', '/path/to/icon.svg');
  });

  it('applies the correct class based on props', async () => {
    const { rerender } = render(<Button label="Click Me" onClick={() => {}} isToggle={true} />);

    await act(async () => {
      rerender(<Button label="Click Me" onClick={() => {}} isToggle={true} />);
    });
    expect(screen.getByText('Click Me')).toHaveClass('toggle-button');

    await act(async () => {
      rerender(<Button label="Click Me" onClick={() => {}} isPopupOpen={true} />);
    });
    expect(screen.getByText('Click Me')).toHaveClass('toggle-button');

    await act(async () => {
      rerender(<Button label="Click Me" onClick={() => {}} />);
    });
    expect(screen.getByText('Click Me')).toHaveClass('menu-button');
  });

  it('calls the onClick handler when clicked', async () => {
    const handleClick = jest.fn();

    await act(async () => {
      render(<Button label="Click Me" onClick={handleClick} />);
    });

    await act(async () => {
      fireEvent.click(screen.getByText('Click Me'));
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
