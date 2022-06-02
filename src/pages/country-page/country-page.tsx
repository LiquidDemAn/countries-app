import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../../components/button';
import { Main } from '../../components/main';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadCountryInfo, loadCountryNeighbors } from './services/actions';
import { getCountryInfo, getCountryNeighbors } from './services/selectors';
import { CountryInfo } from '../../components/country-info';

export const CountryPage = () => {
	const dispatch = useAppDispatch();
	const { name } = useParams();
	const navigate = useNavigate();
	const country = useAppSelector(getCountryInfo);
	const countryNeighbors = useAppSelector(getCountryNeighbors);

	const goBack = () => navigate(-1);

	useEffect(() => {
		dispatch(loadCountryInfo(name!));
	}, [dispatch, name]);

	useEffect(() => {
		if (country?.borders) {
			dispatch(loadCountryNeighbors(country?.borders));
		}
	}, [country?.borders, dispatch]);

	return (
		<Main>
			<Button onClick={goBack}>
				<IoArrowBack />
				Back
			</Button>
			<>
				{country && (
					<CountryInfo
						neighbors={countryNeighbors}
						navigate={navigate}
						country={country}
					/>
				)}
			</>
		</Main>
	);
};
