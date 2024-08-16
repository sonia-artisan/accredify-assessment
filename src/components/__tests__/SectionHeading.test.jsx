import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SectionHeading from '../SectionHeading';
import { useNavigation } from '../../utils/navigateTo';

jest.mock('../../utils/navigateTo');

describe('SectionHeading', () => {
  const mockNavigateTo = jest.fn();

  beforeEach(() => {
    useNavigation.mockReturnValue(mockNavigateTo);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the headingText', () => {
    const headingText = 'Test Heading';
    render(<SectionHeading headingText={headingText} actionText="Action" link="/test" />);

    const headingElement = screen.getByText(headingText);
    expect(headingElement).toBeInTheDocument();
  });

  it('should render the actionText and handle click', () => {
    const actionText = 'Click Me';
    const link = '/test';

    render(<SectionHeading headingText="Heading" actionText={actionText} link={link} />);

    const actionElement = screen.getByText(actionText);
    expect(actionElement).toBeInTheDocument();

    fireEvent.click(actionElement);
    expect(mockNavigateTo).toHaveBeenCalledWith(link);
  });

  it('should not render actionText if it is not provided', () => {
    render(<SectionHeading headingText="Heading" link="/test" />);

    const actionElement = screen.getByText('', { selector: '.action-text' });
    expect(actionElement).toBeInTheDocument();
    expect(actionElement.textContent).toBe('');
  });
});
