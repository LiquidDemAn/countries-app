import { createSlice } from '@reduxjs/toolkit';
import { CountryPageStateType } from './typedef';

const initialState: CountryPageStateType = {};

export const countryPage = createSlice({
	name: 'country-page',
	initialState,
	reducers: {},
	extraReducers: {},
});
