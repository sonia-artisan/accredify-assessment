// PopupMenu.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PopupMenu from '../PopupMenu';
import { useNavigation } from '../../utils/navigateTo';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

jest.mock('../../utils/navigateTo', () => ({
  useNavigation: jest.fn(),
}));

describe('PopupMenu', () => {
  let navigateTo;

  beforeEach(() => {
    navigateTo = jest.fn();
    useNavigation.mockReturnValue(navigateTo);
  });

  test('renders with the userName prop', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PopupMenu userName="John Doe" />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Recipient')).toBeInTheDocument();
  });

  test('displays UserIcon with correct size', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PopupMenu userName="John Doe" />
        </BrowserRouter>
      </Provider>
    );

    // Find UserIcon by its alt text
    const userIcon = screen.getByAltText('user-profile-image');
    expect(userIcon).toBeInTheDocument();
    expect(userIcon).toHaveStyle('width: 50px; height: 50px;');
  });

  test('navigates to /sign-in when Log out is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PopupMenu userName="John Doe" />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Log out'));
    expect(navigateTo).toHaveBeenCalledWith('/sign-in');
  });
});
