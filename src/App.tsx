import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HomePage } from './pages/home-page';

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</Provider>
	);
}

export default App;
