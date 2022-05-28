import { AllCountriesType } from '../../pages/homepage/services/typedef';
import {
	CardBody,
	CardImage,
	CardInfo,
	CardInfoItem,
	CardTitle,
	CardWrapper,
} from './country-card.styled';

type Props = {
	country: AllCountriesType;
};

export const CountryCard = ({ country }: Props) => {
	return (
		<CardWrapper>
			<CardImage />
			<CardBody>
				<CardTitle>{country.name}</CardTitle>
				<CardInfo>
					<CardInfoItem>Population: {country.population}</CardInfoItem>
					<CardInfoItem>Region: {country.region}</CardInfoItem>
					<CardInfoItem>Capital: {country.capital}</CardInfoItem>
				</CardInfo>
			</CardBody>
		</CardWrapper>
	);
};
