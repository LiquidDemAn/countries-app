import { AppState } from './../../../store/typedef';

export const getComparisonCountriesPageLoading = (state: AppState) => {
	return state.comparisonCountriesPage.loading;
};

export const getFirstCountry = (state: AppState) => {
	return state.comparisonCountriesPage.firstCountry;
};

export const getSecondCountry = (state: AppState) => {
	return state.comparisonCountriesPage.secondCountry;
};
