import { AppState } from './../store/typedef';
import { SelectOptionType } from '../typedef';

export const getCountriesNames = (state: AppState) => state.global.countriesNames;

export const getCountriesNamesOptions = (state: AppState) => {
	const countriesNames = getCountriesNames(state);
    
	const options: SelectOptionType[] = countriesNames.map((item) => {
		return { value: item, label: item };
	});

	return options;
};
