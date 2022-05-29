import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HomePage } from './pages/home-page';
import { NotFoundPage } from './pages/not-found-page';
import { CountryPage } from './pages/country-page';

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/country/:name' element={<CountryPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Provider>
	);
}

export default App;
