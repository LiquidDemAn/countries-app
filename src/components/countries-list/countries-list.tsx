import { getAllCountries } from '../../pages/homepage/services/selectors';
import { useAppSelector } from '../../store/hooks';
import { CountryCard } from '../country-card';
import { CountriesListWrapper } from './countries-list.styled';

export const CountriesList = () => {
	const countries = useAppSelector(getAllCountries);

	return (
		<CountriesListWrapper>
			{countries.map((country) => (
				<CountryCard country={country} />
			))}
		</CountriesListWrapper>
	);
};
