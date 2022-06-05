import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HomePage } from './pages/home-page';
import { NotFoundPage } from './pages/not-found-page';
import { CountryPage } from './pages/country-page';
import { Layout } from './components/layout';
import { RandomCountryPage } from './pages/random-country-page';

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='random-country' element={<RandomCountryPage />} />
					<Route path='country/:name' element={<CountryPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Provider>
	);
}

export default App;
