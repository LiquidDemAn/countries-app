import { useEffect } from 'react';
import { CountiresSelect } from '../../components/countries-select';
import { Main } from '../../components/main';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadCountriesNames } from './services/actions';
import { getCountriesNamesOptions } from './services/selectors';

export const ComparisonCountriesPage = () => {
	const dispatch = useAppDispatch();
	const options = useAppSelector(getCountriesNamesOptions);

	useEffect(() => {
		if (!options.length) {
			dispatch(loadCountriesNames());
		}
	}, [dispatch, options]);

	return (
		<Main>
			<p>ComparisonCountriesPage</p>
			<CountiresSelect
				options={options}
				placeholder='Select country'
				isClearable
			/>
		</Main>
	);
};
