import { loadAllCountries } from './actions';
import { createSlice } from '@reduxjs/toolkit';
import { HomePageStateType } from './typedef';

const initialState: HomePageStateType = {
	allCountries: [],
};

export const homepage = createSlice({
	name: 'homepage',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder.addCase(loadAllCountries.fulfilled, (state, { payload }) => {
			state.allCountries = payload;
		}),
});

export const {} = homepage.actions;
