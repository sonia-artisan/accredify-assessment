import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('HomePage', () => {
  it('renders correctly based on user type', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(callback => callback({
      user: { data: { record: { data: { name: 'John Doe' } } } },
      personalUser: { data: { record: { data: { name: 'Jane Doe' } } } },
      userType: 'managedUser',
    }));

    render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      );

    expect(screen.getByText('Hi, John Doe 👋')).toBeInTheDocument();
    expect(screen.getByText('Manage your documents issued by SMU Academy or track your career goal.')).toBeInTheDocument();
  });
});
