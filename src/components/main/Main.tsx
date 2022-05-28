import { Container } from '../container';
import { Controls } from '../controls';
import { CountriesList } from '../countries-list';
import { Wrapper } from './main.styled';
import { useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';
import { loadAllCountries } from '../../pages/homepage/services/actions';

export const Main = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadAllCountries());
	}, []);

	return (
		<Wrapper>
			<Container>
				<Controls />
				<CountriesList />
			</Container>
		</Wrapper>
	);
};
