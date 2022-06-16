import styled from 'styled-components';

export const ComparisonCountriesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 4rem;
	margin: 2rem 0;

	@media (min-width: 992px) {
		flex-direction: row;
		align-items: flex-start	;
		justify-content: space-between;
	}
`;
