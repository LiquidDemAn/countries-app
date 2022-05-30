import { createSlice } from '@reduxjs/toolkit';
import { loadCountryInfo } from './actions';
import { CountryPageStateType } from './typedef';

const initialState: CountryPageStateType = {};

export const countryPage = createSlice({
	name: 'country-page',
	initialState,
	reducers: {},
	extraReducers: (bulider) =>
		bulider.addCase(loadCountryInfo.fulfilled, (state, { payload }) => {
			state.countryInfo = payload[0];
		}),
});
