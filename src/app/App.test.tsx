import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { store } from './../store/store';
import App from './App';

export const renderWrapper = (component: ReactElement | ReactElement[]) => {
	render(<Provider store={store}>{component}</Provider>);
};

// test('renders title', () => {
// 	render(<App />);
// 	const title = screen.getByText(/Whqere is the world?/i);
// 	expect(title).toBeInTheDocument();
// });
