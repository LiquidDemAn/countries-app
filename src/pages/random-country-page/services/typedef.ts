import { CountryInfoType } from '../../country-page/services/typedef';

export type RandomCountryPageStateType = {
	loading: boolean;
	error: string;
	country?: CountryInfoType;
	neighbors: string[];
};
