import { COUNTRY_NEIGHBORS } from './../../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { COUNTRY } from '../../../config';
import { CountryInfoFromServerType } from './typedef';

export const loadCountryInfo = createAsyncThunk<
	CountryInfoFromServerType,
	string
>('country-page/load-country-info', async (name) => {
	const response = await axios.get(COUNTRY(name));
	return await response.data[0];
});

export const loadCountryNeighbors = createAsyncThunk<string[], string[]>(
	'country-page/load-country-neighbors',
	async (codes) => {
		const response = await axios.get(COUNTRY_NEIGHBORS(codes));
		return await response.data.map((item: { name: string }) => item.name);
	}
);
