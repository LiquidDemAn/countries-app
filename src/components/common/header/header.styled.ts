import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
`;

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`;

export const HeaderTitle = styled(Link).attrs({
	to: '',
})`
	display: none;
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-decoration: none;
	font-weight: var(--fw-bold);

	@media (min-width: 767px) {
		display: block;
	}
`;

export const ModeSwitcher = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.75rem;
	color: var(--colors-text);
	font-size: var(--fs-sm);
	font-weight: var(--fw-bold);
	text-transform: capitalize;
	cursor: pointer;
`;
