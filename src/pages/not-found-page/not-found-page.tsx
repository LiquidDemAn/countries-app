import { Link } from 'react-router-dom';
import { Main } from '../../components/main';

export const NotFoundPage = () => {
	return (
		<Main>
			<>
				Page not found. Back to <Link to='/'>Homepage</Link>
			</>
		</Main>
	);
};
