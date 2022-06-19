import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CountryInfoFromServerType } from '../../country-page/services/typedef';
import { COUNTRY_URL, COUNTRY_NEIGHBORS_URL } from './../../../config';

export const loadRandomCountry = createAsyncThunk<
	CountryInfoFromServerType,
	string
>('random-country-page/load-country-info', async (name) => {
	const response = await axios.get(COUNTRY_URL(name));
	return await response.data[0];
});

export const loadRandomCountryNeighbors = createAsyncThunk<string[], string[], {rejectValue: string}>(
	'random-country-page/load-country-neighbors',
	async (codes, { rejectWithValue }) => {
		if (codes.length) {
			const response = await axios.get(COUNTRY_NEIGHBORS_URL(codes));

			if (!response.status) {
				return rejectWithValue('Server Error');
			}

			return await response.data.map((item: { name: string }) => item.name);
		} else {
			return [];
		}
	}
	
);
