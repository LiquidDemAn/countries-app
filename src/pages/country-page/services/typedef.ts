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

export type CountryInfoFromServerType = {
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

export type CountryInfoType = {
	name: string;
	flag: string;
	borders: string[];
	leftList: {
		nativeName: string;
		population: number;
		region: string;
		subregion: string;
		capital: string;
	};
	rightList: {
		topLevelDomain: string[];
		currencies: string[];
		languages: string[];
	};
};

export type CountryPageStateType = {
	countryInfo?: CountryInfoType;
};
