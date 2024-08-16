import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from '../MainLayout';
import Sidebar from '../../Sidebar';
import Header from '../../Header';
import Footer from '../../Footer';

jest.mock('../../Sidebar', () => () => <div>Mocked Sidebar</div>);
jest.mock('../../Header', () => () => <div>Mocked Header</div>);
jest.mock('../../Footer', () => () => <div>Mocked Footer</div>);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div>Mocked Outlet</div>,
}));

describe('MainLayout', () => {
  it('should render the Sidebar, Header, Footer, and Outlet components', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    // Check if the Sidebar is rendered
    expect(screen.getByText('Mocked Sidebar')).toBeInTheDocument();

    // Check if the Header is rendered
    expect(screen.getByText('Mocked Header')).toBeInTheDocument();

    // Check if the Outlet is rendered
    expect(screen.getByText('Mocked Outlet')).toBeInTheDocument();

    // Check if the Footer is rendered
    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
  });
});
