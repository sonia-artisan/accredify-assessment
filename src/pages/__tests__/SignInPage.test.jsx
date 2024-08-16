import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigation } from '../../utils/navigateTo';
import SignInPage from '../SignInPage';

jest.mock('../../utils/navigateTo', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('../../components/Container', () => ({ children }) => <div data-testid="container">{children}</div>);
jest.mock('../../components/Title', () => ({ titleText }) => <div data-testid="title">{titleText}</div>);
jest.mock('../../components/Subtitle', () => ({ subtitleText }) => <div data-testid="subtitle">{subtitleText}</div>);
jest.mock('../../components/Button', () => ({ label, onClick }) => (
  <button data-testid="button" onClick={onClick}>{label}</button>
));

describe('SignInPage', () => {
  it('renders correctly and handles login', () => {

    const navigateTo = jest.fn();
    useNavigation.mockReturnValue(navigateTo);
    render(<SignInPage />);

    expect(screen.getByTestId('title')).toHaveTextContent('Welcome back!');
    expect(screen.getByTestId('subtitle')).toHaveTextContent('Sign in to continue your journey');
    expect(screen.getByTestId('button')).toHaveTextContent('Sign In');

    fireEvent.click(screen.getByTestId('button'));
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});
