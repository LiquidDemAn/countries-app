import { ReactElement } from 'react';
import { Container } from '../container';
import { Wrapper } from './main.styled';

type Props = {
	children: ReactElement | ReactElement[];
};

export const Main = ({ children }: Props) => {
	return (
		<Wrapper>
			<Container>{children}</Container>
		</Wrapper>
	);
};
