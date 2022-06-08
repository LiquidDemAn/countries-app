export const BASE_URL = 'https://restcountries.com/v2/';
export const ALL_COUNTRIES_URL = `${BASE_URL}all?fields=name,capital,region,population,flags`;
export const COUNTRY_URL = (name: string) => {
	return `${BASE_URL}name/${name}?fields=name,nativeName,capital,population,flags,region,subregion,topLevelDomain,currencies,languages,borders`;
};
export const COUNTRY_NEIGHBORS_URL = (codes: string[]) =>
	`${BASE_URL}alpha?codes=${codes.join(',')}`;
export const COUNTRIES_NAMES_URL = `${BASE_URL}all?fields=name`;