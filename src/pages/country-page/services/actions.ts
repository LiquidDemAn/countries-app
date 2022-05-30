import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { COUNTRY } from '../../../config';
import { CountryInfoType } from './typedef';

export const loadCountryInfo = createAsyncThunk<CountryInfoType[], string>(
	'country-page/load-country-info',
	async (name) => {
		const response = await axios.get(COUNTRY(name));
		return await response.data;
	}
);
