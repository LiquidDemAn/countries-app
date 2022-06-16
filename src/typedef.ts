export type ListItemType = {
	title: string;
	description: string | string[] | number;
};

export type SelectOptionType = {
	value: string;
	label: string;
};

export type CurrencieType = {
	code: string;
	name: string;
	symbol: string;
};

export type LanguageType = {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
};

export type FlagType = {
	svg: string;
	png: string;
};
