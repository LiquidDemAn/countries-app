import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HashRouter } from 'react-router-dom';
import { Header } from './header';

describe('Header component', () => {
	it('theme is light by default', () => {
		render(<Header />, { wrapper: HashRouter });

		expect(screen.getByText(/light/i)).toBeInTheDocument();
	});

	it('theme switched to dark and again to light', () => {
		render(<Header />, { wrapper: HashRouter });

		const lightTheme = screen.getByText(/light/i);
		expect(lightTheme).toBeInTheDocument();

		userEvent.click(lightTheme);

		const darkThem = screen.getByText(/dark/i);
		expect(darkThem).toBeInTheDocument();

		userEvent.click(darkThem);

		expect(lightTheme).toBeInTheDocument();
	});
});
