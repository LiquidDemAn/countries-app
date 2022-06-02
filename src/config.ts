export const BASE_URL = 'https://restcountries.com/v2/';
export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,region,population,flags`;
export const COUNTRY = (name: string) => {
	return `${BASE_URL}name/${name}?fields=name,nativeName,capital,population,flags,region,subregion,topLevelDomain,currencies,languages,borders`;
};
export const COUNTRY_NEIGHBORS = (codes: string []) => `${BASE_URL}alpha?codes=${codes.join(',')}`