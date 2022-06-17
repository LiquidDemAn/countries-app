import styled from 'styled-components';

export const CountriesListWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	row-gap: 2rem;
	column-gap: 2rem;

	& > a {
		text-decoration: none;
		color: var(--colors-text);
	}

	@media (min-width: 767px) {
		flex-direction: row;
	}
`;
