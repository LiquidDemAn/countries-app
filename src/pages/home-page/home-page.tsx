import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadAllCountries } from './services/actions';
import { getAllCountries, getFilteredCountries } from './services/selectors';
import { Main } from '../../components/main';
import { FilterOptionType } from '../../components/filter/filter-options';
import { Controls } from '../../components/controls';
import { Search } from '../../components/search';
import { FilterSelect } from '../../components/filter';
import { filterOptions } from '../../components/filter/filter-options';
import { CountriesList } from '../../components/countries-list';

export const HomePage = () => {
	const dispatch = useAppDispatch();
	const countries = useAppSelector(getAllCountries);
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState<null | FilterOptionType>(null);

	const filteredCountries = useAppSelector((state) =>
		getFilteredCountries(state, region, search)
	);

	const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const handlerFilter = (newValue: unknown) => {
		setRegion(newValue as FilterOptionType);
	};

	useEffect(() => {
		if (!countries.length) {
			dispatch(loadAllCountries());
		}
	}, [dispatch, countries]);

	return (
		<Main>
			<Controls>
				<Search search={search} handlerSearch={handlerSearch} />
				<FilterSelect
					options={filterOptions}
					placeholder='Filter by region'
					isClearable
					isSearchable={false}
					value={region}
					onChange={handlerFilter}
				/>
			</Controls>
			<CountriesList countries={filteredCountries} />
		</Main>
	);
};
