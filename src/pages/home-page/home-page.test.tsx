import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HashRouter } from 'react-router-dom';
import { renderWrapper } from '../../app/App.test';
import { HomePage } from './home-page';

describe('Home page component', () => {
	it('Loader works', () => {
		renderWrapper(<HomePage />);
		expect(screen.getByText(/No countries found/i)).toBeInTheDocument();
	});

	it('search of countries is works', async () => {
		renderWrapper(
			<HashRouter>
				<HomePage />
			</HashRouter>
		);

		expect(screen.getByText(/No countries found/i)).toBeInTheDocument();

		expect(await screen.findByText(/Afghanistan/i)).toBeInTheDocument();
		expect(await screen.findByText(/Åland Islands/i)).toBeInTheDocument();
		expect(await screen.findByText(/Albania/i)).toBeInTheDocument();

		const input = screen.getByRole('searchbox');
		userEvent.type(input, 'af');

		expect(screen.getByText(/Afghanistan/i)).toBeInTheDocument();
		expect(screen.queryByText(/Åland Islands/i)).toBeNull();
		expect(screen.queryByText(/Albania/i)).toBeNull();
	});

	it('no country found', async () => {
		renderWrapper(
			<HashRouter>
				<HomePage />
			</HashRouter>
		);

		const notFound = /no countries/i;

		expect(await screen.findByText(/Afghanistan/i)).toBeInTheDocument();
		expect(screen.queryByText(notFound)).toBeNull();

		const input = screen.getByRole('searchbox');
		userEvent.type(input, 'qq');

		expect(screen.getByText(notFound)).toBeInTheDocument();
	});
});
