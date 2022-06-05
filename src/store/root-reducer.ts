import { randomCountryPage } from '../pages/random-country-page/services/random-country-page.slice';
import { countryPage } from './../pages/country-page/services/country-page.slice';
import { homepage } from '../pages/home-page/services/hompage.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
	homepage: homepage.reducer,
	countryPage: countryPage.reducer,
	randomCountryPage: randomCountryPage.reducer,
});
