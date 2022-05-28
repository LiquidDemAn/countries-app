import { ALL_COUNTRIES } from './../../../config';
import { AllCountriesType } from './typedef';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadAllCountries = createAsyncThunk<AllCountriesType[]>(
	'homepage/load-all-countries',
	async () => {
		const response = await axios.get(ALL_COUNTRIES);
		return await response.data;
	}
);
