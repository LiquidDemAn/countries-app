import { CountryCardType } from '../../pages/homepage/services/typedef';
import {
	CardBody,
	CardImage,
	CardInfo,
	CardInfoItem,
	CardTitle,
	CardWrapper,
} from './country-card.styled';

type Props = {
	country: CountryCardType;
};

export const CountryCard = ({ country }: Props) => {
	return (
		<CardWrapper>
			<CardImage src={country.flag} alt={country.name} />
			<CardBody>
				<CardTitle>{country.name}</CardTitle>
				<CardInfo>
					{country.info.map((item) => (
						<CardInfoItem key={item.title}>
							<span>{item.title}</span>: {item.description}
						</CardInfoItem>
					))}
				</CardInfo>
			</CardBody>
		</CardWrapper>
	);
};
