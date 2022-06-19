import { createSlice } from '@reduxjs/toolkit';
import { loadFirstCountry, loadSecondCountry } from './actions';
import { ComparisonCountriesPageStateType } from './typedef';

const initialState: ComparisonCountriesPageStateType = {
	loading: false,
};

export const comparisonCountriesPageSlice = createSlice({
	name: 'comparison-countries-page',
	initialState,
	reducers: {},
	extraReducers: (buidder) =>
		buidder
			.addCase(loadFirstCountry.pending, (state) => {
				state.loading = true;
			})
			.addCase(loadFirstCountry.fulfilled, (state, { payload }) => {
				state.firstCountry = payload;
				state.loading = false;
			})
			.addCase(loadSecondCountry.pending, (state) => {
				state.loading = true;
			})
			.addCase(loadSecondCountry.fulfilled, (state, { payload }) => {
				state.secondCountry = payload;
				state.loading = false;
			}),
});
