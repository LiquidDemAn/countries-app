import { createSlice } from '@reduxjs/toolkit';
import { groupeCountryInfo } from '../../../functions/groupe-country-info';
import { loadCountryInfo, loadCountryNeighbors } from './actions';
import { CountryPageStateType } from './typedef';

const initialState: CountryPageStateType = {
	countryNeighbors: [],
};

export const countryPage = createSlice({
	name: 'country-page',
	initialState,
	reducers: {},
	extraReducers: (bulider) =>
		bulider
			.addCase(loadCountryInfo.fulfilled, (state, { payload }) => {
				state.countryInfo = groupeCountryInfo(payload)
			})
			.addCase(loadCountryNeighbors.fulfilled, (state, { payload }) => {
				state.countryNeighbors = payload || [];
			}),
});
