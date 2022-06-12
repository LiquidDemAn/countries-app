import { CurrencieType, FlagType, LanguageType } from '../../../typedef';

export type ComparisonCountryInfoType = {
	name: string;
	population: string;
	area: string;
	borders: string[];
	flags: FlagType;
	currencies: CurrencieType[];
	languages: LanguageType[];
	independent: boolean;
};

export type ComparisonCountriesPageStateType = {
	firstCountry: ComparisonCountryInfoType | {};
	secondCountry: ComparisonCountryInfoType | {};
};
