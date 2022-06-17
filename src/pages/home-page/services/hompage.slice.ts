import { createSlice } from '@reduxjs/toolkit';
import { loadAllCountries } from './actions';
import { HomePageStateType } from './typedef';

const initialState: HomePageStateType = {
	allCountries: [],
};

export const homePageSlice = createSlice({
	name: 'home-page',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder.addCase(loadAllCountries.fulfilled, (state, { payload }) => {
			state.allCountries = payload;
		}),
});
