import { useEffect } from 'react';
import { IoDice } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Main } from '../../components/common/main';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCountriesNames } from '../../global-services/selectors';
import { Loader } from '../../components/common/container/loader';
import { CountryInfo } from '../../components/common/country-info';
import { loadCountriesNames } from '../../global-services/actions';
import { getRandomIndex } from './../../functions/random-index';
import {
	getRandomCountry,
	getRandomCountryLoading,
	getRandomCountryNeighbors,
} from './services/selectors';
import {
	loadRandomCountry,
	loadRandomCountryNeighbors,
} from './services/actions';
import { TitleWrapper } from './random-country-page.styled';

export const RandomCountryPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const countriesNames = useAppSelector(getCountriesNames);
	const country = useAppSelector(getRandomCountry);
	const neighbors = useAppSelector(getRandomCountryNeighbors);
	const loading = useAppSelector(getRandomCountryLoading);

	const toggle = () => {
		const randomIndex = getRandomIndex(countriesNames.length);
		dispatch(loadRandomCountry(countriesNames[randomIndex]));
	};

	useEffect(() => {
		if (!countriesNames.length) {
			dispatch(loadCountriesNames());
		}
	}, [dispatch, countriesNames]);

	useEffect(() => {
		if (country?.borders) {
			dispatch(loadRandomCountryNeighbors(country?.borders));
		}
	}, [country?.borders, dispatch]);

	return (
		<Main>
			<>
				<TitleWrapper>
					<span>Click on dice to get random country:</span>
					<IoDice onClick={toggle} />
				</TitleWrapper>
				{country && (
					<CountryInfo
						neighbors={neighbors}
						navigate={navigate}
						country={country}
					/>
				)}
			</>
			<Loader isLoading={loading} />
		</Main>
	);
};
