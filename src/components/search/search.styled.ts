import styled from 'styled-components';

export const SearchContainer = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1rem 2rem;
	background-color: var(--colors-ui-base);
	border-radius: var(--radius);
	box-shadow: var(--shadow);

	@media (min-width: 767px) {
		width: 280px;
	}
`;

export const SearchInput = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for a country...',
})`
	border: none;
	outline: none;
	background-color: var(--colors-bg);
	color: var(--colors-text);
`;
