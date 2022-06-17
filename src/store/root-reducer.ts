import { randomCountryPageSlice } from './../pages/random-country-page/services/random-country-page.slice';
import { globalSlice } from './../global-services/global.slice';
import { countryPageSlice } from './../pages/country-page/services/country-page.slice';
import { homePageSlice } from '../pages/home-page/services/hompage.slice';
import { combineReducers } from '@reduxjs/toolkit';
import { comparisonCountriesPageSlice } from '../pages/comparison-countries-page/services/comparison-countries-page.slice';

export const rootReducer = combineReducers({
	global: globalSlice.reducer,
	homePage: homePageSlice.reducer,
	countryPage: countryPageSlice.reducer,
	randomCountryPage: randomCountryPageSlice.reducer,
	comparisonCountriesPage: comparisonCountriesPageSlice.reducer,
});
