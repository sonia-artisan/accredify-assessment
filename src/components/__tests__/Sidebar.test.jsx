import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';

jest.mock('../UserIcon', () => () => <div>UserIconMock</div>);

jest.mock('react-router-dom', () => ({
	useNavigate: jest.fn(),
}));

describe('Sidebar', () => {
	const mockNavigate = jest.fn();

	beforeEach(() => {
		require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render all sidebar items', () => {
		render(
			<MemoryRouter>
				<Sidebar />
			</MemoryRouter>
		);

		const sidebarItems = ['Home', 'Documents', 'Insights', 'Privacy', 'Settings'];

		sidebarItems.forEach((item) => {
			expect(screen.getByAltText(`${item}-icon`)).toBeInTheDocument();
		});
	});

	it('should call navigate when a sidebar item is clicked', () => {
		render(
			<MemoryRouter>
				<Sidebar />
			</MemoryRouter>
		);

		const homeIcon = screen.getByAltText('Home-icon');

		fireEvent.click(homeIcon);

		expect(mockNavigate).toHaveBeenCalledWith('/');
		expect(screen.getByAltText('Home-icon').style.filter).toBe('brightness(0) invert(1)');
	});

	it('should update the selected item when clicked', () => {
		render(
			<MemoryRouter>
				<Sidebar />
			</MemoryRouter>
		);

		const documentsIcon = screen.getByAltText('Documents-icon');

		fireEvent.click(documentsIcon);

		expect(mockNavigate).toHaveBeenCalledWith('/my-documents');
		expect(screen.getByAltText('Documents-icon').style.filter).toBe('brightness(0) invert(1)');
	});
});
