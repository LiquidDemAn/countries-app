import { Container } from '../container';
import { Controls } from '../controls';
import { Wrapper } from './main.styled';

export const Main = () => {
	return (
		<Wrapper>
			<Container>
				<Controls />
			</Container>
		</Wrapper>
	);
};
