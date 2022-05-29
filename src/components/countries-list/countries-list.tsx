import { Link } from 'react-router-dom';
import { CountryCardType } from '../../pages/home-page/services/typedef';
import { CountryCard } from '../country-card';
import { CountriesListWrapper } from './countries-list.styled';

type Props = {
	countries: CountryCardType[];
};

export const CountriesList = ({ countries }: Props) => {
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
