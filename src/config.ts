export const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES_URL = `${BASE_URL}all?fields=name,capital,region,population,flags`;

export const COUNTRIES_NAMES_URL = `${BASE_URL}all?fields=name`;

export const COUNTRY_URL = (name: string) => {
	return `${BASE_URL}name/${name}?fields=name,nativeName,capital,population,flags,region,subregion,topLevelDomain,currencies,languages,borders`;
};

export const COUNTRY_NEIGHBORS_URL = (codes: string[]) => {
	return `${BASE_URL}alpha?codes=${codes.join(',')}`;
};

export const COMPARISON_COUNTRY_URL = (name: string) => {
	return `${BASE_URL}name/${name}?fields=name,flags,population,area,currencies,languages,borders`;
};
