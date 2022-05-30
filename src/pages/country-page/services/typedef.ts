type CurrenciesType = {
	code: string;
	name: string;
	symbol: string;
};

type LanguagesType = {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
};

export type CountryInfoType = {
	name: string;
	topLevelDomain: string[];
	capital: string;
	subregion: string;
	region: string;
	population: number;
	borders: string[];
	nativeName: string;
	flags: {
		svg: string;
		png: string;
	};
	currencies: CurrenciesType[];
	languages: LanguagesType[];
	independent: boolean;
};

export type CountryPageStateType = {
	countryInfo?: CountryInfoType | CountryInfoType[];
};
