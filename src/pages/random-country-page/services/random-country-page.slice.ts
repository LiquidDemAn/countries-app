import { createSlice } from '@reduxjs/toolkit';
import { groupeCountryInfo } from './../../../functions/groupe-country-info';
import { loadRandomCountry, loadRandomCountryNeighbors } from './actions';
import { RandomCountryPageStateType } from './typedef';

const initialState: RandomCountryPageStateType = {
	neighbors: [],
	loading: false,
};

export const randomCountryPageSlice = createSlice({
	initialState,
	name: 'random-country-page',
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(loadRandomCountry.pending, (state) => {
				state.loading = true;
			})
			.addCase(loadRandomCountry.fulfilled, (state, { payload }) => {
				state.country = groupeCountryInfo(payload);
				state.loading = false;
			})
			.addCase(loadRandomCountryNeighbors.fulfilled, (state, { payload }) => {
				state.neighbors = payload;
			}),
});
