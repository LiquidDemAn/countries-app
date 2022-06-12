import { loadFirstCountry, loadSecondCountry } from './actions';
import { createSlice } from '@reduxjs/toolkit';
import { ComparisonCountriesPageStateType } from './typedef';

const initialState: ComparisonCountriesPageStateType = {
	firstCountry: {},
	secondCountry: {}
};

export const comparisonCountriesPage = createSlice({
	name: 'comparison-countries-page',
	initialState,
	reducers: {},
	extraReducers: (buidder) =>
		buidder.addCase(loadFirstCountry.fulfilled, (state, { payload }) => {
			state.firstCountry = payload;
		})
		.addCase(loadSecondCountry.fulfilled, (state, {payload}) => {
			state.secondCountry = payload;
		})
});
