import { Container } from '../container';
import { Controls } from '../controls';
import { CountriesList } from '../countries-list';
import { Wrapper } from './main.styled';

export const Main = () => {
	return (
		<Wrapper>
			<Container>
				<Controls />
				<CountriesList />
			</Container>
		</Wrapper>
	);
};
