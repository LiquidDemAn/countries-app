import { screen, render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { fakeCountries } from '../../../app/App.test';
import { CountriesList } from './countries-list';

describe('CountriesList component', () => {
	it('countries list is empty', () => {
		render(<CountriesList countries={[]} />);
		expect(screen.getByText(/No countries found/i)).toBeInTheDocument();
	});

	it('countries list renders', () => {
		render(<CountriesList countries={fakeCountries} />, {
			wrapper: HashRouter,
		});

		expect(screen.getByText(/Afghanistan/i)).toBeInTheDocument();
		expect(screen.getByText(/Åland Islands/i)).toBeInTheDocument();
	});
});
