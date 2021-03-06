import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { ButtonBack } from '../../components/country-page/button-back';
import { Main } from '../../components/common/main';
import { CountryInfo } from '../../components/common/country-info';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Loader } from '../../components/common/container/loader';
import { loadCountryInfo, loadCountryNeighbors } from './services/actions';
import {
	getCountryInfo,
	getCountryNeighbors,
	getCountryPageLoading,
} from './services/selectors';

export const CountryPage = () => {
	const dispatch = useAppDispatch();
	const { name } = useParams();
	const navigate = useNavigate();
	const loading = useAppSelector(getCountryPageLoading);
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
		<>
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
			<Loader isLoading={loading} />
		</>
	);
};
