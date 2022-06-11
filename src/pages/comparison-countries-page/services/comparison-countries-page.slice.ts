import { loadCountriesNames } from './actions';
import { createSlice } from '@reduxjs/toolkit';
import { ComparisonCountriesPageStateType } from './typedef';

const initialState: ComparisonCountriesPageStateType = {
	countriesNames: [],
};

export const comparisonCountriesPage = createSlice({
	name: 'comparison-countries-page',
	initialState,
	reducers: {},
	extraReducers: (buidder) =>
		buidder.addCase(loadCountriesNames.fulfilled, (state, { payload }) => {
			state.countriesNames = payload;
		}),
});
