import { homepage } from '../pages/home-page/services/hompage.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
	homepage: homepage.reducer,
});
