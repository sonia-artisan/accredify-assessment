import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../userSlice';
import personalUserReducer from '../personalUserSlice';
import toggleReducer from '../toggleSlice';
import careerGoalReducer from '../careerGoalSlice';
import documentsReducer from '../documentsSlice';
import { store } from '../store';  // Import the store you created

describe('Redux Store Configuration', () => {
  it('should configure the store with the correct reducers', () => {
    const expectedReducers = {
      user: userReducer,
      personalUser: personalUserReducer,
      userType: toggleReducer,
      careerGoal: careerGoalReducer,
      documents: documentsReducer,
    };

    const testStore = configureStore({ reducer: expectedReducers });

    expect(testStore.getState()).toEqual(store.getState());
  });

  it('should initialize with the correct default state', () => {
    const initialState = {
      user: userReducer(undefined, { type: '@@INIT' }),
      personalUser: personalUserReducer(undefined, { type: '@@INIT' }),
      userType: toggleReducer(undefined, { type: '@@INIT' }),
      careerGoal: careerGoalReducer(undefined, { type: '@@INIT' }),
      documents: documentsReducer(undefined, { type: '@@INIT' }),
    };

    expect(store.getState()).toEqual(initialState);
  });
});
