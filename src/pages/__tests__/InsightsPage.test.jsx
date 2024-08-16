import React from 'react';
import { render, screen } from '@testing-library/react';
import InsightsPage from '../InsightsPage';

jest.mock('../../components/Title', () => ({ titleText }) => <div data-testid="title">{titleText}</div>);
jest.mock('../../components/Subtitle', () => ({ subtitleText }) => <div data-testid="subtitle">{subtitleText}</div>);
jest.mock('../../components/CareerGoal', () => ({ hideAction }) => <div data-testid="career-goal" data-hide-action={hideAction.toString()}></div>);

describe('InsightsPage', () => {
  it('renders Title, Subtitle, and CareerGoal components correctly', () => {
    render(<InsightsPage />);

    expect(screen.getByTestId('title')).toHaveTextContent('Insights Page');
    expect(screen.getByTestId('subtitle')).toHaveTextContent('Have a look at the top insights for the day.');
    expect(screen.getByTestId('career-goal')).toHaveAttribute('data-hide-action', 'true');
  });
});
