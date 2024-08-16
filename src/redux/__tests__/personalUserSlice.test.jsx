import { configureStore } from '@reduxjs/toolkit';
import personalUserReducer, { fetchPersonalUser } from '../personalUserSlice';

describe('personalUserSlice', () => {
  it('should handle initial state', () => {
    const initialState = {
      isLoading: false,
      data: {},
      error: false,
    };
    const store = configureStore({ reducer: personalUserReducer });
    const state = store.getState();
    expect(state).toEqual(initialState);
  });

  it('should handle fetchPersonalUser.pending', () => {
    const store = configureStore({ reducer: personalUserReducer });

    store.dispatch({ type: fetchPersonalUser.pending.type });

    const state = store.getState();
    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(false);
  });

  it('should handle fetchPersonalUser.fulfilled', async () => {
    const mockData = {
      user: {
        id: '123',
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const store = configureStore({ reducer: personalUserReducer });

    await store.dispatch(fetchPersonalUser());

    const state = store.getState();
    expect(state.isLoading).toBe(false);
    expect(state.data).toEqual(mockData);
    expect(state.error).toBe(false);

    global.fetch.mockRestore();
  });

  it('should handle fetchPersonalUser.rejected', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    const store = configureStore({ reducer: personalUserReducer });

    await store.dispatch(fetchPersonalUser());

    const state = store.getState();
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(true);

    global.fetch.mockRestore();
  });
});
