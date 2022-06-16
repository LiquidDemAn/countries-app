import { CurrencieType, FlagType, LanguageType } from '../../../typedef';

export type ComparisonCountryServerInfoType = {
	name: string;
	population: number;
	area: number;
	flags: FlagType;
	currencies: CurrencieType[];
	languages: LanguageType[];
	independent: boolean;
};

export type ComparisonCountryInfoType = {
	name: string;
	population: number;
	area: number;
	flag: string;
	currencies: string[];
	languages: string[];
};

export type ComparisonCountriesPageStateType = {
	firstCountry?: ComparisonCountryInfoType;
	secondCountry?: ComparisonCountryInfoType;
};
