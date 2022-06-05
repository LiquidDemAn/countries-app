import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { COUNTRY_URL, COUNTRY_NEIGHBORS_URL } from '../../../config';
import { CountryInfoFromServerType } from './typedef';

export const loadCountryInfo = createAsyncThunk<CountryInfoFromServerType, string>('country-page/load-country-info', async (name) => {
	const response = await axios.get(COUNTRY_URL(name));
	return await response.data[0];
});

export const loadCountryNeighbors = createAsyncThunk<string[], string[]>(
	'country-page/load-country-neighbors',
	async (codes) => {
		const response = await axios.get(COUNTRY_NEIGHBORS_URL(codes));
		return await response.data.map((item: { name: string }) => item.name);
	}
);
