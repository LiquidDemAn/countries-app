import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { CountryCardType } from '../pages/home-page/services/typedef';
import { store } from './../store/store';
import '@testing-library/jest-dom';
import App from './App';

export const renderWrapper = (component: ReactElement | ReactElement[]) => {
	render(<Provider store={store}>{component}</Provider>);
};

export const fakeCountries: CountryCardType[] = [
	{
		name: 'Afghanistan',
		flag: '',
		info: [],
	},

	{
		name: 'Åland Islands',
		flag: '',
		info: [],
	},
];

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

	it('moved to random-country page', () => {
		renderWrapper(
			<HashRouter>
				<App />
			</HashRouter>
		);

		userEvent.click(screen.getByRole('button'));
		expect(screen.getByRole('menu')).toBeInTheDocument();

		const link = screen.getByRole('link', { name: 'RandomCountry' });
		expect(link).toBeInTheDocument();
		userEvent.click(link);

		const title = screen.getByText(/random country:/i);
		expect(title).toBeInTheDocument();
	});

	it('moved to comparison-country page', () => {
		renderWrapper(
			<HashRouter>
				<App />
			</HashRouter>
		);

		userEvent.click(screen.getByRole('button'));
		expect(screen.getByRole('menu')).toBeInTheDocument();

		const link = screen.getByRole('link', { name: 'ComparisonCountries' });
		expect(link).toBeInTheDocument();
		userEvent.click(link);

		expect(screen.getByText(/First Country/i)).toBeInTheDocument();
	});

	it('moved to home page', () => {
		renderWrapper(
			<HashRouter>
				<App />
			</HashRouter>
		);

		userEvent.click(screen.getByRole('button'));
		expect(screen.getByRole('menu')).toBeInTheDocument();

		const link = screen.getByRole('link', { name: 'HomePage' });
		expect(link).toBeInTheDocument();
		userEvent.click(link);

		expect(screen.getByText(/filter/i)).toBeInTheDocument();
	});

	it('moved from comparison page to home page by clicking on header title', () => {
		renderWrapper(
			<HashRouter>
				<App />
			</HashRouter>
		);

		userEvent.click(screen.getByRole('button'));
		expect(screen.getByRole('menu')).toBeInTheDocument();

		const comparisonLink = screen.getByRole('link', {
			name: 'ComparisonCountries',
		});
		expect(comparisonLink).toBeInTheDocument();
		userEvent.click(comparisonLink);

		expect(screen.getByText(/First Country/i)).toBeInTheDocument();

		const headerTitle = screen.getByText(/Where is the world?/i);
		expect(headerTitle).toBeInTheDocument();
		userEvent.click(headerTitle);

		expect(screen.queryByText(/First Country/i)).toBeNull();
		expect(screen.getByText(/filter/i)).toBeInTheDocument();
	});
});
