import { AppState } from '../../../store/typedef';
import { SelectOptionType } from './../../../typedef';
import { CountryCardType } from './typedef';

export const getHomePageLoading = (state: AppState) => state.homePage.loading;
export const getAllCountries = (state: AppState) => state.homePage.allCountries;

export const getFilteredCountries = (
	state: AppState,
	region: null | SelectOptionType,
	search: string
): CountryCardType[] => {
	let countries = getAllCountries(state);

	if (region) {
		countries = countries.filter((country) => country.region === region.label);
	}

	if (search) {
		countries = countries.filter((country) =>
			country.name.toLowerCase().includes(search.toLowerCase())
		);
	}

	return countries.map(({ name, capital, flags, region, population }) => {
		return {
			name,
			flag: flags.png,
			info: [
				{ title: 'Population', description: population },
				{ title: 'Region', description: region },
				{ title: 'Capital', description: capital },
			],
		};
	});
};
