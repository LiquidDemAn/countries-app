import { screen } from '@testing-library/react';
import { renderWrapper } from '../../app/App.test';
import { HomePage } from './home-page';

describe('Home page component', () => {
	it('Loader works', () => {
		renderWrapper(<HomePage />);
		expect(screen.getByText(/No countries found/i)).toBeInTheDocument();
	});
});
