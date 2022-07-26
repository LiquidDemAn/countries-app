import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HashRouter } from 'react-router-dom';
import { fakeCountries, renderWrapper } from '../../app/App.test';
import { filterOptions } from '../../components/home-page/filter/filter-options';
import { HomePage } from './home-page';

describe('Home page component', () => {
	// it('Loader works', () => {
	// 	renderWrapper(<HomePage />);
	// 	expect(screen.getByText(/No countries found/i)).toBeInTheDocument();
	// });

	// it('search of countries is works', async () => {
	// 	renderWrapper(
	// 		<HashRouter>
	// 			<HomePage />
	// 		</HashRouter>
	// 	);

	// 	expect(screen.getByText(/No countries found/i)).toBeInTheDocument();

	// 	expect(await screen.findByText(/Afghanistan/i)).toBeInTheDocument();
	// 	expect(await screen.findByText(/Åland Islands/i)).toBeInTheDocument();
	// 	expect(await screen.findByText(/Albania/i)).toBeInTheDocument();

	// 	const input = screen.getByRole('searchbox');
	// 	userEvent.type(input, 'af');

	// 	expect(screen.getByText(/Afghanistan/i)).toBeInTheDocument();
	// 	expect(screen.queryByText(/Åland Islands/i)).toBeNull();
	// 	expect(screen.queryByText(/Albania/i)).toBeNull();
	// });

	// it('no country found', async () => {
	// 	renderWrapper(
	// 		<HashRouter>
	// 			<HomePage />
	// 		</HashRouter>
	// 	);

	// 	const notFound = /no countries/i;

	// 	expect(await screen.findByText(/Afghanistan/i)).toBeInTheDocument();
	// 	expect(screen.queryByText(notFound)).toBeNull();

	// 	const input = screen.getByRole('searchbox');
	// 	userEvent.type(input, 'qq');

	// 	expect(screen.getByText(notFound)).toBeInTheDocument();
	// });

	// it('filter renders', () => {
	// 	renderWrapper(
	// 		<HashRouter>
	// 			<HomePage />
	// 		</HashRouter>
	// 	);

	// 	expect(screen.getByText(/filter/i)).toBeInTheDocument();
	// });

	// it('user can select the region', () => {
	// 	renderWrapper(
	// 		<HashRouter>
	// 			<HomePage />
	// 		</HashRouter>
	// 	);

	// 	const select = screen.getByRole('combobox');
	// 	const defaultOption = /filter/i;

	// 	expect(select).toBeInTheDocument();
	// 	expect(screen.getByText(defaultOption)).toBeInTheDocument();

	// 	userEvent.click(select);

	// 	filterOptions.forEach((option) => {
	// 		expect(screen.getByText(option.value)).toBeInTheDocument();
	// 	});

	// 	const firstOption = filterOptions[0].value;
	// 	const secodnOption = filterOptions[1].value;

	// 	userEvent.click(screen.getByText(firstOption));

	// 	expect(screen.getByText(firstOption)).toBeInTheDocument();
	// 	expect(screen.queryByText(secodnOption)).toBeNull();
	// 	expect(screen.queryByText(defaultOption)).toBeNull();
	// });

	it('filter works', async () => {
		renderWrapper(
			<HashRouter>
				<HomePage />
			</HashRouter>
		);

		expect(screen.getByText(/No countries found/i)).toBeInTheDocument();

		expect(await screen.findByText(/Afghanistan/i)).toBeInTheDocument();
		expect(await screen.findByText(/Åland Islands/i)).toBeInTheDocument();
		expect(await screen.findByText(/Albania/i)).toBeInTheDocument();

		const select = screen.getByRole('combobox');
		const option = filterOptions[2].value;
		expect(select).toBeInTheDocument();

		userEvent.click(select);
		userEvent.click(screen.getByText(option));

		expect(screen.getByText(fakeCountries[0].name)).toBeInTheDocument();
		expect(screen.queryByText(fakeCountries[1].name)).toBeNull();
	});
});
