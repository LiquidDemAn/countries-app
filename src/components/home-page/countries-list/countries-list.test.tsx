import { screen, render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { CountryCardType } from '../../../pages/home-page/services/typedef';
import { CountriesList } from './countries-list';

const fakeCountries: CountryCardType[] = [
	{
		name: 'Afghanistan',
		flag: '',
		info: [],
	},

	{
		name: 'Åland Islands',
		flag: '',
		info: [],
	},
];

describe('CountriesList component', () => {
	it('countries array is empty', () => {
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
