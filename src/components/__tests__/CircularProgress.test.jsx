import React from 'react';
import { render, screen } from '@testing-library/react';
import CircularProgress from '../CircularProgress';
import { CircularProgressbar } from 'react-circular-progressbar';

jest.mock('react-circular-progressbar', () => ({
  buildStyles: jest.fn(() => ({})),
  CircularProgressbar: jest.fn(() => <div>Mock CircularProgressbar</div>),
}));

describe('CircularProgress', () => {
  test('renders correctly with given value', () => {
    render(<CircularProgress value={35} />);

    expect(screen.getByText('Your Progress')).toBeInTheDocument();

    expect(screen.getByText('Mock CircularProgressbar')).toBeInTheDocument();
  });

  test('applies correct styles to the wrapper div', () => {
    render(<CircularProgress value={35} />);

    const wrapperDiv = screen.getByText('Mock CircularProgressbar').parentElement;

    expect(wrapperDiv).toHaveStyle('width: 150px');
    expect(wrapperDiv).toHaveStyle('height: 150px');
  });
});
