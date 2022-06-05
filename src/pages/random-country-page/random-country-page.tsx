import { Main } from '../../components/main';
import { getRandomIndex } from './../../functions/random-index';
import { IoDice } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import {
	getCountriesNames,
	getRandomCountry,
	getRandomCountryNeighbors,
} from './services/selectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import {
	loadCountriesNames,
	loadRandomCountry,
	loadRandomCountryNeighbors,
} from './services/actions';
import { CountryInfo } from '../../components/country-info';

export const RandomCountryPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const countriesNames = useAppSelector(getCountriesNames);
	const country = useAppSelector(getRandomCountry);
	const neighbors = useAppSelector(getRandomCountryNeighbors);

	const toggle = () => {
		const randomIndex = getRandomIndex(countriesNames.length);
		console.log(randomIndex);
		dispatch(loadRandomCountry(countriesNames[randomIndex]));
	};

	useEffect(() => {
		dispatch(loadCountriesNames());
	}, [dispatch]);

	useEffect(() => {
		if (country?.borders) {
			dispatch(loadRandomCountryNeighbors(country?.borders));
		}
	}, [country?.borders, dispatch]);

	return (
		<Main>
			<>
				Random Country Page <IoDice onClick={toggle} />
			</>
			<>
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
