import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthLayout from '../AuthLayout';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div>Mocked Outlet</div>,
}));

describe('AuthLayout', () => {
  it('should render the Outlet component', () => {
    render(
      <MemoryRouter>
        <AuthLayout />
      </MemoryRouter>
    );

    const outletElement = screen.getByText('Mocked Outlet');
    expect(outletElement).toBeInTheDocument();
  });

  it('should render with the correct classes', () => {
    render(
      <MemoryRouter>
        <AuthLayout />
      </MemoryRouter>
    );

    const mainContainer = screen.getByRole('main').parentElement;
    expect(mainContainer).toHaveClass('flex p-40 justify-center items-center');
  });
});
