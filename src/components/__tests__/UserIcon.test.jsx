import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import UserIcon from '../UserIcon';
import { fetchUser } from '../../redux/userSlice';
import { fetchPersonalUser } from '../../redux/personalUserSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../../redux/userSlice', () => ({
  fetchUser: jest.fn(),
}));

jest.mock('../../redux/personalUserSlice', () => ({
  fetchPersonalUser: jest.fn(),
}));

describe('UserIcon', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render user image for managed user', () => {
    useSelector.mockImplementation((selector) => {
      if (selector(state => state.userType)) {
        return 'managedUser';
      }
      if (selector(state => state.user)) {
        return {
          data: {
            record: {
              data: {
                profile_picture_url: '/path/to/managedUserImage.png',
              },
            },
          },
        };
      }
      return {};
    });

    render(<UserIcon isSidebar={true} size="40px" />);

    const imageElement = screen.getByAltText('user-profile-image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/path/to/managedUserImage.png');
    expect(imageElement).toHaveStyle({ width: '40px', height: '40px' });
  });

  it('should render user image for personal user when userType is personalUser', () => {
    useSelector.mockImplementation((selector) => {
      if (selector(state => state.userType)) {
        return 'personalUser';
      }
      if (selector(state => state.personalUser)) {
        return {
          data: {
            record: {
              data: {
                profile_picture_url: '/path/to/personalUserImage.png',
              },
            },
          },
        };
      }
      return {};
    });

    render(<UserIcon isSidebar={true} size="40px" />);

    const imageElement = screen.getByAltText('user-profile-image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/path/to/personalUserImage.png');
    expect(imageElement).toHaveStyle({ width: '40px', height: '40px' });
  });

  it('should dispatch fetchUser when userType is managedUser', () => {
    useSelector.mockImplementation((selector) => {
      if (selector(state => state.userType)) {
        return 'managedUser';
      }
      return {};
    });

    render(<UserIcon isSidebar={true} size="40px" />);

    expect(mockDispatch).toHaveBeenCalledWith(fetchUser());
  });

  it('should dispatch fetchPersonalUser when userType is personalUser', () => {
    useSelector.mockImplementation((selector) => {
      if (selector(state => state.userType)) {
        return 'personalUser';
      }
      return {};
    });

    render(<UserIcon isSidebar={true} size="40px" />);

    expect(mockDispatch).toHaveBeenCalledWith(fetchPersonalUser());
  });
});
