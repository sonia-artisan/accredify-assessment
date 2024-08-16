import { configureStore } from '@reduxjs/toolkit';
import careerGoalReducer, { fetchCareerGoal } from '../careerGoalSlice';

describe('careerGoalSlice', () => {
  it('should handle initial state', () => {
    const initialState = {
      isLoading: false,
      data: {},
      error: false,
    };
    const store = configureStore({ reducer: careerGoalReducer });
    const state = store.getState();
    expect(state).toEqual(initialState);
  });

  it('should handle fetchCareerGoal.pending', () => {
    const store = configureStore({ reducer: careerGoalReducer });

    store.dispatch({ type: fetchCareerGoal.pending.type });

    const state = store.getState();
    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(false);
  });

  it('should handle fetchCareerGoal.fulfilled', async () => {
    const mockData = {
      goals: ['Become a Software Engineer', 'Learn React', 'Master Redux'],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const store = configureStore({ reducer: careerGoalReducer });

    await store.dispatch(fetchCareerGoal());

    const state = store.getState();
    expect(state.isLoading).toBe(false);
    expect(state.data).toEqual(mockData);
    expect(state.error).toBe(false);

    global.fetch.mockRestore();
  });

  it('should handle fetchCareerGoal.rejected', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    const store = configureStore({ reducer: careerGoalReducer });

    await store.dispatch(fetchCareerGoal());

    const state = store.getState();
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(true);

    global.fetch.mockRestore();
  });
});
