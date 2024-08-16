import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';
import { formatDate } from '../../utils/dateFormatting';

jest.mock('../../utils/dateFormatting');
jest.mock('../Action', () => () => <div>Mocked Action</div>);

describe('Table', () => {
  const mockItems = [
    { document_name: 'Document 1', received_on: '2023-08-14' },
    { document_name: 'Document 2', received_on: '2023-08-16' },
    { document_name: 'Document 3', received_on: '2023-08-15' },
  ];

  const mockIcon = '/path/to/icon.svg';

  beforeEach(() => {
    formatDate.mockImplementation((date) => `Formatted ${date}`);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render table headers correctly', () => {
    render(<Table items={mockItems} icon={mockIcon} />);

    expect(screen.getByText('Document Name')).toBeInTheDocument();
    expect(screen.getByText('Received On')).toBeInTheDocument();
  });

  it('should render items sorted by received_on date in descending order', () => {
    render(<Table items={mockItems} icon={mockIcon} />);

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockItems.length + 1); // +1 for header row

    const firstRow = rows[1];
    const secondRow = rows[2];
    const thirdRow = rows[3];

    expect(firstRow).toHaveTextContent('Document 2');
    expect(secondRow).toHaveTextContent('Document 3');
    expect(thirdRow).toHaveTextContent('Document 1');
  });

  it('should render the formatted received_on date', () => {
    render(<Table items={mockItems} icon={mockIcon} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(`Formatted ${item.received_on}`)).toBeInTheDocument();
    });
  });

  it('should render the icon for each item', () => {
    render(<Table items={mockItems} icon={mockIcon} />);

    const icons = screen.getAllByRole('img');
    expect(icons).toHaveLength(mockItems.length);

    icons.forEach((icon) => {
      expect(icon).toHaveAttribute('src', mockIcon);
    });
  });

  it('should render the Action component for each item', () => {
    render(<Table items={mockItems} icon={mockIcon} />);

    mockItems.forEach(() => {
      expect(screen.getAllByText('Mocked Action')).toHaveLength(mockItems.length);
    });
  });
});
