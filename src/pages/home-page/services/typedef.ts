import { ListItemType, FlagType } from '../../../typedef';

export type AllCountriesType = {
	name: string;
	capital: string;
	region: string;
	population: number;
	flags: FlagType;
	independent: boolean;
};

export type CountryCardType = {
	name: string;
	flag: string;
	info: ListItemType[];
};

export type HomePageStateType = {
	allCountries: AllCountriesType[];
};
