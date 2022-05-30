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
			state.countryInfo = {
				name: payload.name,
				flag: payload.flags.png,
				borders: payload.borders,
				leftList: {
					nativeName: payload.nativeName,
					population: payload.population,
					region: payload.region,
					subregion: payload.subregion,
					capital: payload.capital,
				},
				rightList: {
					topLevelDomain: payload.topLevelDomain,
					currencies: payload.currencies.map((item) => item.name),
					languages: payload.languages.map((item) => item.name),
				},
			};
		}),
});
