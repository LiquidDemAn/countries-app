import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Homepage } from './pages/homepage';

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path='/' element={<Homepage />} />
			</Routes>
		</Provider>
	);
}

export default App;
