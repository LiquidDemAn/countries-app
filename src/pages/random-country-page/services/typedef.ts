import { CountryInfoType } from '../../country-page/services/typedef';

export type RandomCountryPageStateType = {
	country?: CountryInfoType;
	neighbors: string[];
};
