import { ListItemType } from '../../../typedef';

export type AllCountriesType = {
	name: string;
	capital: string;
	region: string;
	population: number;
	flags: {
		svg: string;
		png: string;
	};
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
