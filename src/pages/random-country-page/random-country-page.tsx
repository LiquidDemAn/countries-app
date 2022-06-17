import { Main } from '../../components/common/main';
import { getRandomIndex } from './../../functions/random-index';
import { IoDice } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import {
	getRandomCountry,
	getRandomCountryNeighbors,
} from './services/selectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import {
	loadRandomCountry,
	loadRandomCountryNeighbors,
} from './services/actions';
import { getCountriesNames } from '../../global-services/selectors';
import { CountryInfo } from '../../components/country-page/country-info';
import { TitleWrapper } from './random-country-page.styled';
import { loadCountriesNames } from '../../global-services/actions';

export const RandomCountryPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const countriesNames = useAppSelector(getCountriesNames);
	const country = useAppSelector(getRandomCountry);
	const neighbors = useAppSelector(getRandomCountryNeighbors);

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
		</Main>
	);
};
