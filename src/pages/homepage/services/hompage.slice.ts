import { createSlice } from '@reduxjs/toolkit';
import { HomePageStateType } from './typedef';

const initialState: HomePageStateType = {};

export const homepage = createSlice({
	name: 'homepage',
	initialState,
	reducers: {},
	extraReducers: {},
});

export const {} = homepage.actions;
