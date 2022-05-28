import { useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';
import { loadAllCountries } from '../../pages/homepage/services/actions';

export const HomePage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadAllCountries());
	}, []);


	return <div>homepage</div>;
};
