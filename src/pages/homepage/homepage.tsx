import { useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';
import { loadAllCountries } from '../../pages/homepage/services/actions';
import { Header } from '../../components/header';
import { Main } from '../../components/main';

export const Homepage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadAllCountries());
	}, []);

	return (
		<>
			<Header />
			<Main />
		</>
	);
};
