import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { MenuComponent } from './menu';

describe('Menu component', () => {
	it('menu renders', () => {
		render(<MenuComponent />);

		const menuButton = screen.getByRole('button');

		expect(menuButton).toBeInTheDocument();
	});

	it('clicking on the button opens the menu', () => {
		render(<MenuComponent />, { wrapper: BrowserRouter });

		const menuButton = screen.getByRole('button');

		userEvent.click(menuButton);

		expect(screen.getByRole('presentation')).toBeInTheDocument();
		expect(screen.getByRole('menu')).toBeInTheDocument();
		expect(screen.getByText(/home/i)).toBeInTheDocument();
		expect(screen.getByText(/random/i)).toBeInTheDocument();
		expect(screen.getByText(/comparison/i)).toBeInTheDocument();
	});
});
