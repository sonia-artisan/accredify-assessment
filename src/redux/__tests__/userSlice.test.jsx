import { configureStore } from '@reduxjs/toolkit';
import userReducer, { fetchUser } from '../userSlice';

describe('userSlice', () => {
  it('should handle initial state', () => {
    const initialState = {
      isLoading: false,
      data: {},
      error: false,
    };
    const store = configureStore({ reducer: userReducer });
    const state = store.getState();
    expect(state).toEqual(initialState);
  });

  it('should handle fetchUser.pending', () => {
    const store = configureStore({ reducer: userReducer });

    store.dispatch({ type: fetchUser.pending.type });

    const state = store.getState();
    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(false);
  });

  it('should handle fetchUser.fulfilled', async () => {
    const mockData = {
      user: {
        id: '123',
        name: 'Jane Doe',
        email: 'janedoe@example.com',
      },
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const store = configureStore({ reducer: userReducer });

    await store.dispatch(fetchUser());

    const state = store.getState();
    expect(state.isLoading).toBe(false);
    expect(state.data).toEqual(mockData);
    expect(state.error).toBe(false);

    global.fetch.mockRestore();
  });

  it('should handle fetchUser.rejected', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    const store = configureStore({ reducer: userReducer });

    await store.dispatch(fetchUser());

    const state = store.getState();
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(true);

    global.fetch.mockRestore();
  });
});
