import styled from 'styled-components';

export const SearchContainer = styled.label`
	display: flex;
	// justify-content: space-between;
	align-items: center;
	width: 100%;
	column-gap: 20px;
	padding: 1rem 2rem;
	background-color: var(--colors-ui-base);
	border-radius: var(--radius);
	box-shadow: var(--shadow);

	@media (min-width: 767px) {
		max-width: 400px;
	}
`;

export const SearchInput = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for a country...',
})`
	width: 100%;
	border: none;
	outline: none;
	background-color: var(--colors-ui-base);
	color: var(--colors-text);
`;
