import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { COUNTRY } from '../../../config';
import { CountryInfoFromServerType } from './typedef';

export const loadCountryInfo = createAsyncThunk<CountryInfoFromServerType, string>(
	'country-page/load-country-info',
	async (name) => {
		const response = await axios.get(COUNTRY(name));
		return await response.data[0];
	}
);
