import { AppState } from './../../../store/typedef';

export const getFirstCountry = (state: AppState) => {
	return state.comparisonCountriesPage.firstCountry;
};
export const getSecondCountry = (state: AppState) => {
	return state.comparisonCountriesPage.secondCountry;
};
