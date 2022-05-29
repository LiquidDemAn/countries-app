import { useState } from 'react';
import { getFilteredCountries } from '../../pages/home-page/services/selectors';
import { useAppSelector } from '../../store/hooks';
import { Container } from '../container';
import { Controls } from '../controls';
import { CountriesList } from '../countries-list';
import { Wrapper } from './main.styled';
import { Search } from '../search';
import { FilterSelect } from '../filter';
import { filterOptions, FilterOptionType } from '../filter/filter-options';

export const Main = () => {
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState<null | FilterOptionType>(null);

	const countries = useAppSelector((state) =>
		getFilteredCountries(state, region, search)
	);

	const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const handlerFilter = (newValue: unknown) => {
		setRegion(newValue as FilterOptionType);
	};

	return (
		<Wrapper>
			<Container>
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
				<CountriesList countries={countries} />
			</Container>
		</Wrapper>
	);
};
