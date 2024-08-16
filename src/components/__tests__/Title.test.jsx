import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../Title';

describe('Title', () => {
  it('should render the titleText', () => {
    const titleText = 'Test Title';
    
    render(<Title titleText={titleText} />);

    const titleElement = screen.getByText(titleText);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('h1');
  });

  it('should render a div with class "h1" when titleText is not provided', () => {
    render(<Title titleText="" />);

    // Query the element by class name directly
    const titleElement = screen.getByText('', { selector: '.h1' });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('h1');
    expect(titleElement.textContent).toBe('');
  });
});
