import { useEffect, useState } from 'react';
import { Main } from '../../components/main';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadCountriesNames } from '../../global-services/actions';
import { getCountriesNamesOptions } from '../../global-services/selectors';
import { ComparisonCountryInfo } from '../../components/comparison-country-info';
import { ComparisonCountriesWrapper } from './comparison-countries-page.styled';
import { SelectOptionType } from '../../typedef';

export const ComparisonCountriesPage = () => {
	const dispatch = useAppDispatch();
	const options = useAppSelector(getCountriesNamesOptions);

	const selectFirstCountry = (newValue: unknown) => {
		console.log(newValue);
	};

	const selectSecondCountry = (newValue: unknown) => {
		console.log(newValue);
	};

	useEffect(() => {
		if (!options.length) {
			dispatch(loadCountriesNames());
		}
	}, [dispatch, options]);

	return (
		<Main>
			<h4>Select two countries for comparison</h4>
			<ComparisonCountriesWrapper>
				<ComparisonCountryInfo
					options={options}
					selectName={'First Country'}
					onChange={selectFirstCountry}
				/>
				<ComparisonCountryInfo
					options={options}
					selectName={'Second Country'}
					onChange={selectSecondCountry}
				/>
			</ComparisonCountriesWrapper>
		</Main>
	);
};
