import { groupeCountryInfo } from './../../../functions/groupe-country-info';
import {
	loadCountriesNames,
	loadRandomCountry,
	loadRandomCountryNeighbors,
} from './actions';
import { createSlice } from '@reduxjs/toolkit';
import { RandomCountryPageStateType } from './typedef';

const initialState: RandomCountryPageStateType = {
	countiesNames: [],
	neighbors: [],
};

export const randomCountryPage = createSlice({
	initialState,
	name: 'random-country-page',
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(loadCountriesNames.fulfilled, (state, { payload }) => {
				state.countiesNames = payload;
			})
			.addCase(loadRandomCountry.fulfilled, (state, { payload }) => {
				state.country = groupeCountryInfo(payload);
			})
			.addCase(loadRandomCountryNeighbors.fulfilled, (state, { payload }) => {
				state.neighbors = payload;
			}),
});
