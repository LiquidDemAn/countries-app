import { useEffect } from 'react';
import { Main } from '../../components/common/main';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadCountriesNames } from '../../global-services/actions';
import { getCountriesNamesOptions } from '../../global-services/selectors';
import { ComparisonCountryInfo } from '../../components/comparison-country-page/comparison-country-info';
import { SelectOptionType } from '../../typedef';
import { ComparisonCountriesWrapper } from './comparison-countries-page.styled';
import { loadFirstCountry, loadSecondCountry } from './services/actions';
import { getFirstCountry, getSecondCountry } from './services/selectors';

export const ComparisonCountriesPage = () => {
	const dispatch = useAppDispatch();
	const options = useAppSelector(getCountriesNamesOptions);
	const firstCountry = useAppSelector(getFirstCountry);
	const secondCountry = useAppSelector(getSecondCountry);

	const selectFirstCountry = (newValue: unknown) => {
		if (newValue) {
			dispatch(loadFirstCountry(newValue as SelectOptionType));
		}
	};

	const selectSecondCountry = (newValue: unknown) => {
		if (newValue) {
			dispatch(loadSecondCountry(newValue as SelectOptionType));
		}
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
					renderInfo={firstCountry}
					comparisonInfo={secondCountry}
					options={options}
					selectName={'First Country'}
					onChange={selectFirstCountry}
				/>
				<ComparisonCountryInfo
					renderInfo={secondCountry}
					comparisonInfo={firstCountry}
					options={options}
					selectName={'Second Country'}
					onChange={selectSecondCountry}
				/>
			</ComparisonCountriesWrapper>
		</Main>
	);
};
