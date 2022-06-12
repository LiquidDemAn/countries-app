import { SelectOptionType } from './../../../typedef';
import { COMPARISON_COUNTRY_URL } from './../../../config';
import axios from 'axios';
import { ComparisonCountryInfoType } from './typedef';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadFirstCountry= createAsyncThunk<ComparisonCountryInfoType, SelectOptionType>(
	'comparison-countries-page/load-first-country',
	async (option) => {
		const response = await axios.get(COMPARISON_COUNTRY_URL(option.value));
		return await response.data[0];
	}
);

export const loadSecondCountry= createAsyncThunk<ComparisonCountryInfoType, SelectOptionType>(
	'comparison-countries-page/load-second-country',
	async (option) => {
		const response = await axios.get(COMPARISON_COUNTRY_URL(option.value));
		return await response.data[0];
	}
);
