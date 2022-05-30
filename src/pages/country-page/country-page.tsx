import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../../components/button';
import { Main } from '../../components/main';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadCountryInfo } from './services/actions';
import { getCountryInfo } from './services/selectors';
import { CountryInfo } from '../../components/country-info';

export const CountryPage = () => {
	const dispatch = useAppDispatch();
	const { name } = useParams();
	const navigate = useNavigate();
	const country = useAppSelector(getCountryInfo);

	const goBack = () => navigate(-1);

	useEffect(() => {
		dispatch(loadCountryInfo(name!));
	}, [dispatch, name]);

	return (
		<Main>
			<Button onClick={goBack}>
				<IoArrowBack />
				Back
			</Button>
			<>{country && <CountryInfo country={country} />}</>
		</Main>
	);
};
