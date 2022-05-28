import { CountryCardType } from './typedef';
import { AppState } from '../../../store/typedef';

export const getAllCountries = (state: AppState) => {
	const countries = state.homepage.allCountries;

	const result: CountryCardType [] = countries.map(({ name, capital, flags, region, population }) => {
		return {
			name,
			flag: flags.png,
			info: [
				{ title: 'Population', description: population },
				{ title: 'Region', description: region },
				{ title: 'Capital', description: capital },
			],
		}
	});

    return result;
};

