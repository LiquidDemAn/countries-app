import { homepage } from './../pages/homepage/services/hompage.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
	homepage: homepage.reducer,
});
