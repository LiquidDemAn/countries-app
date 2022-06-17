import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { ButtonBack } from '../../components/country-page/button-back';
import { Main } from '../../components/common/main';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadCountryInfo, loadCountryNeighbors } from './services/actions';
import { getCountryInfo, getCountryNeighbors } from './services/selectors';
import { CountryInfo } from '../../components/common/country-info';

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
			<ButtonBack onClick={goBack}>
				<IoArrowBack />
				Back
			</ButtonBack>
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
