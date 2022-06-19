import { createSlice } from '@reduxjs/toolkit';
import { loadAllCountries } from './actions';
import { HomePageStateType } from './typedef';

const initialState: HomePageStateType = {
	loading: false,
	allCountries: [],
};

export const homePageSlice = createSlice({
	name: 'home-page',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(loadAllCountries.pending, (state) => {
				state.loading = true;
			})
			.addCase(loadAllCountries.fulfilled, (state, { payload }) => {
				state.allCountries = payload;
				state.loading = false;
			}),
});
