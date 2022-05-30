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
				leftList: [
					{ title: 'Native Name', description: payload.nativeName },
					{ title: 'Population', description: payload.population },
					{ title: 'Region', description: payload.region },
					{ title: 'Sub Region', description: payload.subregion },
					{ title: 'Capital', description: payload.capital },
				],
				rightList: [
					{ title: 'Top Level Domain', description: payload.topLevelDomain },
					{
						title: 'Currencies',
						description: payload.currencies.map((item) => item.name),
					},
					{
						title: 'Languages',
						description: payload.languages.map((item) => item.name),
					},
				],
			};
		}),
});
