import { Link } from 'react-router-dom';
import { getAllCountries } from '../../pages/home-page/services/selectors';
import { useAppSelector } from '../../store/hooks';
import { CountryCard } from '../country-card';
import { CountriesListWrapper } from './countries-list.styled';

export const CountriesList = () => {
	const countries = useAppSelector(getAllCountries);

	return (
		<CountriesListWrapper>
			{countries.map((country) => (
				<Link key={country.name} to={`country/${country.name}`}>
					<CountryCard country={country} />
				</Link>
			))}
		</CountriesListWrapper>
	);
};
