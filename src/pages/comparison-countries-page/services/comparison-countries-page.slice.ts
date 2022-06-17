import { createSlice } from '@reduxjs/toolkit';
import { loadFirstCountry, loadSecondCountry } from './actions';
import { ComparisonCountriesPageStateType } from './typedef';

const initialState: ComparisonCountriesPageStateType = {};

export const comparisonCountriesPageSlice = createSlice({
	name: 'comparison-countries-page',
	initialState,
	reducers: {},
	extraReducers: (buidder) =>
		buidder
			.addCase(loadFirstCountry.fulfilled, (state, { payload }) => {
				state.firstCountry = payload;
			})
			.addCase(loadSecondCountry.fulfilled, (state, { payload }) => {
				state.secondCountry = payload;
			}),
});
