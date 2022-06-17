import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HomePage } from './pages/home-page';
import { NotFoundPage } from './pages/not-found-page';
import { CountryPage } from './pages/country-page';
import { RandomCountryPage } from './pages/random-country-page';
import { ComparisonCountriesPage } from './pages/comparison-countries-page';
import { Layout } from './components/common/layout';

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path='countries-app/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='random-country' element={<RandomCountryPage />} />
					<Route path='comparison-countries' element={<ComparisonCountriesPage />} />
					<Route path='country/:name' element={<CountryPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Provider>
	);
}

export default App;