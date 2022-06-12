import { loadCountriesNames } from './actions';
import { createSlice } from '@reduxjs/toolkit';
import { GlobalStateType } from './typedef';

const initialState: GlobalStateType = {
	countriesNames: [],
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder.addCase(loadCountriesNames.fulfilled, (state, { payload }) => {
			state.countriesNames = payload;
		}),
});
