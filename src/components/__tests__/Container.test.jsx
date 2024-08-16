import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from '../Container';

describe('Container', () => {
  test('renders children correctly', () => {
    render(
      <Container>
        <div>Child Element 1</div>
        <div>Child Element 2</div>
      </Container>
    );

    expect(screen.getByText('Child Element 1')).toBeInTheDocument();
    expect(screen.getByText('Child Element 2')).toBeInTheDocument();
  });

  test('applies correct className to the wrapper div', () => {
    const { container } = render(
      <Container>
        <div>Test Child</div>
      </Container>
    );

    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toHaveClass('container-component');
  });
});
