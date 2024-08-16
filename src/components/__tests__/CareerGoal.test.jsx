import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { fetchCareerGoal } from '../../redux/careerGoalSlice';
import CareerGoal from '../CareerGoal';
import { useNavigation } from '../../utils/navigateTo';

jest.mock('../../utils/navigateTo', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('../../redux/careerGoalSlice', () => ({
  fetchCareerGoal: jest.fn(() => ({ type: 'fetchCareerGoal' })),
}));

describe('CareerGoal', () => {
  let store;
  const navigateTo = jest.fn();

  beforeEach(() => {
    store = configureStore({
      reducer: {
        careerGoal: (state = { data: { record: { data: [{ name: 'Software Engineer', progress: 50 }] } } }, action) => state,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    });

    useNavigation.mockReturnValue(navigateTo);
  });

  test('renders correctly with provided Redux state and props', () => {
    render(
      <Provider store={store}>
        <CareerGoal />
      </Provider>
    );

    expect(screen.getByText(/I want to become a/)).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  test('dispatches fetchCareerGoal on mount', () => {
    const dispatch = jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <CareerGoal />
      </Provider>
    );

    expect(dispatch).toHaveBeenCalledWith({ type: 'fetchCareerGoal' });
  });

  test('calls navigateTo when action text is clicked', () => {
    render(
      <Provider store={store}>
        <CareerGoal />
      </Provider>
    );

    const actionText = screen.getByText('View Insights');
    fireEvent.click(actionText);

    expect(navigateTo).toHaveBeenCalledWith('/my-insights');
  });

  test('does not render action text when hideAction is true', () => {
    render(
      <Provider store={store}>
        <CareerGoal hideAction={true} />
      </Provider>
    );

    expect(screen.queryByText('View Insights')).not.toBeInTheDocument();
  });
});
