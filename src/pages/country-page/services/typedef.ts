import {
	ListItemType,
	FlagType,
	CurrencieType,
	LanguageType,
} from '../../../typedef';

export type CountryInfoFromServerType = {
	name: string;
	topLevelDomain: string[];
	capital: string;
	subregion: string;
	region: string;
	population: number;
	borders: string[];
	nativeName: string;
	flags: FlagType;
	currencies: CurrencieType[];
	languages: LanguageType[];
	independent: boolean;
};

export type CountryInfoType = {
	name: string;
	flag: string;
	borders: string[];
	leftList: ListItemType[];
	rightList: ListItemType[];
};

export type CountryPageStateType = {
	loading: boolean;
	countryInfo?: CountryInfoType;
	countryNeighbors: string[];
};
