import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { COUNTRIES_NAMES_URL } from '../../config';

export const loadCountriesNamesAction = (type: string) => {
	return createAsyncThunk<string[]>(
		type,
		async () => {
			const response = await axios.get(COUNTRIES_NAMES_URL);
			return await response.data.map(
				(item: { name: string; independent: boolean }) => item.name
			);
		}
	);
};
