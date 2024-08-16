import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';
import userReducer from '../../redux/userSlice';
import personalUserReducer from '../../redux/personalUserSlice';
import userTypeReducer from '../../redux/toggleSlice';
import { toggleUserType } from '../../redux/toggleSlice';
import { fetchUser } from '../../redux/userSlice';
import { fetchPersonalUser } from '../../redux/personalUserSlice';

const createMockStore = (preloadedState) => configureStore({
  reducer: {
    user: userReducer,
    personalUser: personalUserReducer,
    userType: userTypeReducer,
  },
  preloadedState,
});

describe('Header component', () => {
  let store;

  beforeEach(() => {
    store = createMockStore({
      user: { data: { record: { data: { name: 'Managed User Name' } } } },
      personalUser: { data: { record: { data: { name: 'Personal User Name' } } } },
      userType: 'managedUser',
    });

   store.dispatch = jest.fn(store.dispatch);
  });

  test('renders with Managed User button and user name', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </Provider>
      );
    });

    const toggleButton = screen.getByText('Managed User');
    expect(toggleButton).toBeInTheDocument();

    const userNameButton = screen.getByText('Managed User Name');
    expect(userNameButton).toBeInTheDocument();
  });

  test('dispatches toggleUserType on button click', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </Provider>
      );
    });

    const toggleButton = screen.getByText('Managed User');

    await act(async () => {
      fireEvent.click(toggleButton);
    });

    expect(store.dispatch).toHaveBeenCalledWith(toggleUserType());
  });

  test('toggles popup menu when menu button is clicked', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </Provider>
      );
    });

    const menuButton = screen.getByText('Managed User Name');

    await act(async () => {
      fireEvent.click(menuButton);
    });

    const popupMenu = screen.getByTestId('popup-menu');
    expect(popupMenu).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(menuButton);
    });

    expect(popupMenu).not.toBeInTheDocument();
  });
});
