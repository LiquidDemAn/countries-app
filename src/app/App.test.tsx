import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { store } from './../store/store';
import App from './App';

export const renderWrapper = (component: ReactElement | ReactElement[]) => {
	render(<Provider store={store}>{component}</Provider>);
};

describe('App component', () => {
	it('renders title', () => {
		renderWrapper(
			<HashRouter>
				<App />
			</HashRouter>
		);
		const title = screen.queryByText(/Where is the world?/i);
		expect(title).toBeInTheDocument();
	});
});
