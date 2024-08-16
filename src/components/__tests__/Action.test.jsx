import React from 'react';
import { render, screen } from '@testing-library/react';
import Action from '../Action';
import ActionsButton from '../assets/actions_button.svg';

jest.mock('../assets/actions_button.svg', () => 'mocked-svg-path');

describe('Action', () => {
  it('renders the image with correct src and className', () => {
    render(<Action />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', 'mocked-svg-path');
    expect(imgElement).toHaveClass('h-5 cursor-pointer');
  });
});
