import React from 'react';
import { render, screen } from '@testing-library/react';
import Subtitle from '../Subtitle';

describe('Subtitle', () => {
  it('should render the subtitleText', () => {
    const subtitleText = 'Test Subtitle';
    
    render(<Subtitle subtitleText={subtitleText} />);

    const subtitleElement = screen.getByText(subtitleText);
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement).toHaveClass('h4');
  });

  it('should render an empty div when subtitleText is not provided', () => {
    render(<Subtitle subtitleText="" />);

    const subtitleElement = screen.getByText('', { selector: '.h4' });
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement).toHaveClass('h4');
    expect(subtitleElement.textContent).toBe('');
  });
});
