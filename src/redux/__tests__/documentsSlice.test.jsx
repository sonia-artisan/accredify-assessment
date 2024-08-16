import { configureStore } from '@reduxjs/toolkit';
import documentsReducer, { fetchDocuments } from '../documentsSlice';

describe('documentsSlice', () => {
  it('should handle initial state', () => {
    const initialState = {
      isLoading: false,
      data: {},
      error: false,
    };
    const store = configureStore({ reducer: documentsReducer });
    const state = store.getState();
    expect(state).toEqual(initialState);
  });

  it('should handle fetchDocuments.pending', () => {
    const store = configureStore({ reducer: documentsReducer });

    store.dispatch({ type: fetchDocuments.pending.type });

    const state = store.getState();
    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(false);
  });

  it('should handle fetchDocuments.fulfilled', async () => {
    const mockData = {
      documents: ['Document 1', 'Document 2', 'Document 3'],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const store = configureStore({ reducer: documentsReducer });

    await store.dispatch(fetchDocuments());

    const state = store.getState();
    expect(state.isLoading).toBe(false);
    expect(state.data).toEqual(mockData);
    expect(state.error).toBe(false);

    global.fetch.mockRestore();
  });

  it('should handle fetchDocuments.rejected', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    const store = configureStore({ reducer: documentsReducer });

    await store.dispatch(fetchDocuments());

    const state = store.getState();
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(true);

    global.fetch.mockRestore();
  });
});
