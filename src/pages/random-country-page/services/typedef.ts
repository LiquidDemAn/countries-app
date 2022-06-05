import { CountryInfoType } from '../../country-page/services/typedef';

export type RandomCountryPageStateType = {
	countiesNames: string[];
	country?: CountryInfoType;
	neighbors: string[];
};
