import { CountryInfoFromServerType } from './../pages/country-page/services/typedef';
import { CountryInfoType } from '../pages/country-page/services/typedef';

export const groupeCountryInfo = (payload: CountryInfoFromServerType): CountryInfoType => {
	return {
		name: payload.name,
		flag: payload.flags.png,
		borders: payload.borders || [],
		leftList:
			[
				{ title: 'Native Name', description: payload.nativeName },
				{ title: 'Population', description: payload.population },
				{ title: 'Region', description: payload.region },
				{ title: 'Sub Region', description: payload.subregion },
				{ title: 'Capital', description: payload.capital },
			] || [],
		rightList:
			[
				{
					title: 'Top Level Domain',
					description: payload.topLevelDomain,
				},
				{
					title: 'Currencies',
					description: payload.currencies.map((item) => item.name),
				},
				{
					title: 'Languages',
					description: payload.languages.map((item) => item.name),
				},
			] || [],
	};
};
