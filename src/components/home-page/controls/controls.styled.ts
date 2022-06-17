import styled from 'styled-components';

export const ControlsWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 3rem;
	column-gap: 2rem;
	margin-bottom: 2rem;

	@media (min-width: 576px) {
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
	}
`;
