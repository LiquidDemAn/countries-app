import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { loadAllCountries } from './services/actions';
import { Main } from '../../components/main';
import { getAllCountries } from './services/selectors';

export const HomePage = () => {
	const dispatch = useAppDispatch();
	const countries = useAppSelector(getAllCountries);

	useEffect(() => {
		if (!countries.length) {
			dispatch(loadAllCountries());
		}
	}, [dispatch, countries]);

	return <Main />;
};
