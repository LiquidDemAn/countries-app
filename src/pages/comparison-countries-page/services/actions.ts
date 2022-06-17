import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SelectOptionType } from './../../../typedef';
import { COMPARISON_COUNTRY_URL } from './../../../config';
import { ComparisonCountryInfoType, ComparisonCountryServerInfoType } from './typedef';

const comparisonCountryInfo = ({
	name,
	population,
	area,
	flags,
	currencies,
	languages,
}: ComparisonCountryServerInfoType): ComparisonCountryInfoType => {
	return {
		name,
		population,
		area,
		flag: flags.png,
		currencies: currencies.map((item) => item.name),
		languages: languages.map((item) => item.name),
	};
};

export const loadFirstCountry = createAsyncThunk<
	ComparisonCountryInfoType,
	SelectOptionType
>('comparison-countries-page/load-first-country', async (option) => {
	const response = await axios.get(COMPARISON_COUNTRY_URL(option.value));
	return await comparisonCountryInfo(response.data[0]);
});

export const loadSecondCountry = createAsyncThunk<
	ComparisonCountryInfoType,
	SelectOptionType
>('comparison-countries-page/load-second-country', async (option) => {
	const response = await axios.get(COMPARISON_COUNTRY_URL(option.value));
	return await comparisonCountryInfo(response.data[0]);
});
