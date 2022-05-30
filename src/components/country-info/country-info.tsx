import { CountryInfoType } from '../../pages/country-page/services/typedef';
import {
	Wrapper,
	InfoWrapper,
	Title,
	Flag,
	ListGroup,
	List,
} from './country-info.styled';

type Props = {
	country: CountryInfoType;
};

export const CountryInfo = ({ country }: Props) => {
	return (
		<Wrapper>
			<Flag src={country.flag} alt={country.name} />
			<InfoWrapper>
				<Title>{country.name}</Title>
				<ListGroup>
					<List></List>

					<List></List>
				</ListGroup>
			</InfoWrapper>
		</Wrapper>
	);
};
