import { SelectOptionType } from './../../../typedef';
import { AppState } from './../../../store/typedef';

export const getCountriesNames = (state: AppState) => {
	return state.comparisonCountriesPage.countriesNames;
};

export const getCountriesNamesOptions = (state: AppState) => {
	const countriesNames = getCountriesNames(state);
    
	const options: SelectOptionType[] = countriesNames.map((item) => {
		return { value: item, label: item };
	});

	return options;
};
