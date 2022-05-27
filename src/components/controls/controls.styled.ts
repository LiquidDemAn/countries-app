import styled from 'styled-components';

export const ControlsWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	row-gap: 20px;
	column-gap: 20px;
	align-items: center;

	@media (min-width: 575px) {
		justify-content: space-between;
	}
`;
