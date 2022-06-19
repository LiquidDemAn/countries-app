import { createSlice } from '@reduxjs/toolkit';
import { groupeCountryInfo } from '../../../functions/groupe-country-info';
import { loadCountryInfo, loadCountryNeighbors } from './actions';
import { CountryPageStateType } from './typedef';

const initialState: CountryPageStateType = {
	loading: false,
	countryNeighbors: [],
};

export const countryPageSlice = createSlice({
	name: 'country-page',
	initialState,
	reducers: {},
	extraReducers: (bulider) =>
		bulider
			.addCase(loadCountryInfo.pending, (state) => {
				state.loading = true;
			})
			.addCase(loadCountryInfo.fulfilled, (state, { payload }) => {
				state.countryInfo = groupeCountryInfo(payload);
				state.loading = false;
			})
			.addCase(loadCountryNeighbors.fulfilled, (state, { payload }) => {
				state.countryNeighbors = payload || [];
			}),
});
