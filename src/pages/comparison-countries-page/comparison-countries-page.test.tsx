import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fakeCountries, renderWrapper } from '../../app/App.test';
import { ComparisonCountriesPage } from './comparison-countries-page';

describe('Comparison-countries page', () => {
	it('page renders', () => {
		renderWrapper(<ComparisonCountriesPage />);

		expect(screen.getByText(/two countries for/i)).toBeInTheDocument();

		const inputs = screen.getAllByRole('combobox');

		inputs.forEach((input) => {
			expect(input).toBeInTheDocument();
		});
	});

	it('selector includes list of countries', async () => {
		renderWrapper(<ComparisonCountriesPage />);

		const inputs = screen.getAllByRole('combobox');
		const firstInput = inputs[0];

		userEvent.click(firstInput);

		await screen.findByText(fakeCountries[0].name);
		expect(screen.getByText(fakeCountries[0].name)).toBeInTheDocument();
	});

	it('slecte typing works', async () => {
		renderWrapper(<ComparisonCountriesPage />);

		const inputs = screen.getAllByRole('combobox');
		const firstInput = inputs[0];
		const firstCountry = fakeCountries[0].name;
		const secondCountry = fakeCountries[1].name;

		userEvent.click(firstInput);

		await screen.findByText(firstCountry);
		await screen.findByText(secondCountry);
		expect(screen.getByText(firstCountry)).toBeInTheDocument();
		expect(screen.getByText(secondCountry)).toBeInTheDocument();

		userEvent.type(firstInput, 'af');

		expect(screen.queryByText(secondCountry)).toBeNull();
		expect(screen.getByText(firstCountry)).toBeInTheDocument();
	});

	it('country selected', async () => {
		renderWrapper(<ComparisonCountriesPage />);

		const inputs = screen.getAllByRole('combobox');
		const secondInput = inputs[1];
		const firstCountry = fakeCountries[0].name;
		const secondCountry = fakeCountries[1].name;

		userEvent.click(secondInput);

		await screen.findByText(secondCountry);
		expect(screen.getByText(secondCountry)).toBeInTheDocument();

		userEvent.click(screen.getByText(firstCountry));

		await screen.findByText(/area/i);

		expect(screen.queryByText(secondCountry)).toBeNull();
		expect(screen.getByText(/area/i)).toBeInTheDocument();
	});
});
