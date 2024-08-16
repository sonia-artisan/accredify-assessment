import React from 'react';
import { render, screen } from '@testing-library/react';
import DocumentsPage from '../DocumentsPage';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import RecentDocuments from '../../components/RecentDocuments';

jest.mock('../../components/Title', () => () => <div data-testid="mock-title" />);
jest.mock('../../components/Subtitle', () => () => <div data-testid="mock-subtitle" />);
jest.mock('../../components/RecentDocuments', () => () => <div data-testid="mock-recent-documents" />);

describe('DocumentsPage', () => {
  it('renders Title, Subtitle, and RecentDocuments components correctly', () => {
    render(<DocumentsPage />);

    expect(screen.getByTestId('mock-title')).toBeInTheDocument();

    expect(screen.getByTestId('mock-subtitle')).toBeInTheDocument();

    expect(screen.getByTestId('mock-recent-documents')).toBeInTheDocument();
  });
});
