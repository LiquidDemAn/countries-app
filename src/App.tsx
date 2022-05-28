import { Header } from './components/header';
import { Main } from './components/main';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Main />
		</Provider>
	);
}

export default App;
