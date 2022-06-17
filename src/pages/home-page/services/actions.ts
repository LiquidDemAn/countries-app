import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ALL_COUNTRIES_URL } from '../../../config';
import { AllCountriesType } from './typedef';

export const loadAllCountries = createAsyncThunk<AllCountriesType[]>(
	'homepage/load-all-countries',
	async () => {
		const response = await axios.get(ALL_COUNTRIES_URL);
		return await response.data;
	}
);
