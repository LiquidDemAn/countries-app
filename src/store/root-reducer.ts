import { randomCountryPage } from '../pages/random-country-page/services/random-country-page.slice';
import { countryPage } from './../pages/country-page/services/country-page.slice';
import { homepage } from '../pages/home-page/services/hompage.slice';
import { combineReducers } from '@reduxjs/toolkit';
import { comparisonCountriesPage } from '../pages/comparison-countries-page/services/comparison-countries-page.slice';

export const rootReducer = combineReducers({
	homepage: homepage.reducer,
	countryPage: countryPage.reducer,
	randomCountryPage: randomCountryPage.reducer,
	comparisonCountriesPage: comparisonCountriesPage.reducer,
});
