import { NavigateFunction } from 'react-router-dom';
import { CountryInfoType } from '../../pages/country-page/services/typedef';
import {
	Wrapper,
	InfoWrapper,
	Title,
	InfoImage,
	ListGroup,
	List,
	ListItem,
	Borders,
	BordersTitle,
	BordersList,
	BorderListItem,
} from './country-info.styled';

type Props = {
	country: CountryInfoType;
	neighbors: string[];
	navigate: NavigateFunction;
};

export const CountryInfo = ({ country, neighbors, navigate }: Props) => {
	return (
		<Wrapper>
			<InfoImage src={country.flag} alt={country.name} />
			<InfoWrapper>
				<Title>{country.name}</Title>
				<ListGroup>
					<List>
						{country.leftList.map((item) => (
							<ListItem key={item.title}>
								<span>{item.title}: </span>
								{typeof item.description === 'string' ||
								typeof item.description === 'number'
									? item.description
									: item.description.join(', ')}
							</ListItem>
						))}
					</List>

					<List>
						{country.rightList.map((item) => (
							<ListItem key={item.title}>
								<span>{item.title}: </span>
								{typeof item.description === 'string' ||
								typeof item.description === 'number'
									? item.description
									: item.description.join(', ')}
							</ListItem>
						))}
					</List>
				</ListGroup>
				<Borders>
					<BordersTitle>Border Countries:</BordersTitle>
					<BordersList>
						{neighbors.map((name) => (
							<BorderListItem onClick={() => navigate(`/country/${name}`)}>
								{name}
							</BorderListItem>
						))}
					</BordersList>
				</Borders>
			</InfoWrapper>
		</Wrapper>
	);
};
