import { useEffect } from 'react';
import { Main } from '../../components/main';
import { useAppDispatch } from '../../store/hooks';
import { loadCountriesNames } from './services/actions';

export const ComparisonCountriesPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadCountriesNames())
    }, [dispatch])

	return (
		<Main>
			<>ComparisonCountriesPage</>
		</Main>
	);
};
