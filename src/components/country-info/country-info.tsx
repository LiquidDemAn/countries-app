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
};

export const CountryInfo = ({ country }: Props) => {
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
						{country.borders.map((item) => (
							<BorderListItem key={item}>{item}</BorderListItem>
						))}
					</BordersList>
				</Borders>
			</InfoWrapper>
		</Wrapper>
	);
};
