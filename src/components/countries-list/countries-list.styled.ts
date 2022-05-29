import styled from 'styled-components';

export const CountriesListWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	row-gap: 30px;
	column-gap: 58.5px;

	& > a {
		text-decoration: none;
		color: var(--colors-text);
	}

	@media (min-width: 767px) {
	}
`;
