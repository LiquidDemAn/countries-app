import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	align-items: center;
	margin-top: 3rem;
	justify-content: space-between;
	width: 100%;
`;

export const InfoImage = styled.img`
	display: block;
	width: 530px;
	height: 350px;
	object-fit: cover;
`;

export const Title = styled.h2`
	margin: 0 0 1.5rem;
	font-weight: var(--fw-bold);
`;

export const InfoWrapper = styled.div`
	width: 530px;
`;

export const ListGroup = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

export const List = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
`;

export const ListItem = styled.li`
	line-height: 1.8;

	& > span {
		font-weight: var(--fw-normal);
	}
`;

export const Borders = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2.5rem;
	column-gap: 1rem;
`;

export const BordersTitle = styled.span`
	font-weight: var(--fw-normal);
`;

export const BordersList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	column-gap: 1rem;
`;

export const BorderListItem = styled.li``;
