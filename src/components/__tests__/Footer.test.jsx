import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  test('renders correctly with the expected classes', () => {
    const { container } = render(<Footer />);

    const outerDiv = container.firstChild;
    expect(outerDiv).toHaveClass('bg-sidebar-background');

    const innerDiv = outerDiv.querySelector('div');
    expect(innerDiv).toHaveClass(
      'flex',
      'justify-between',
      'w-full',
      '-z-40',
      'py-4',
      'px-8',
      'rounded-bl-xl',
      'bg-white',
      'border-b',
      'border-solid',
      'border-border'
    );
  });
});
