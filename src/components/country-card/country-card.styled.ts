import styled from 'styled-components';

export const CardWrapper = styled.article`
	width: 250px;
	border-radius: var(--radius);
	background-color: var(--colors-ui-base);
	box-shadow: var(--shadow);
	cursor: pointer;
	overflow: hidden;
`;

export const CardImage = styled.img`
	display: block;
	width: 100%;
	height: 150px;
	object-fit: cover;
	object-position: center;
	box-shadow: var(--shadow);
`;

export const CardBody = styled.div`
	padding: 1rem 1.5rem 2rem;
`;

export const CardTitle = styled.h3`
	margin-top: 0.5rem;
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
`;

export const CardInfo = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 3px;
	margin: 0 0 0.5rem;
	padding: 0;
	list-style: none;
`;

export const CardInfoItem = styled.li`
	font-size: var(--fs-sm);
	line-height: 1.5;
	font-weight: var(--fw-light);

	& > span {
		font-weight: var(--fw-normal);
	}
`;
