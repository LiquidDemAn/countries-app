import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	column-gap: 20px;
	margin-top: 3rem;
	justify-content: space-between;
	width: 100%;

	@media (min-width: 767px) {
		flex-direction: row;
		align-items: flex-start;
	}

	@media (min-width: 992px) {
		align-items: center;
	}
`;

export const InfoImage = styled.img`
	display: block;
	max-width: 100%;
	height: auto;
	object-fit: cover;
	margin-bottom: 3rem;

	@media (min-width: 576px) {
		max-width: 450px;
	}

	@media (min-width: 767px) {
		margin-bottom: 0;
	}

	@media (min-width: 992px) {
		height: 350px;
	}

	@media (min-width: 1024px) {
		max-width: 540px;
	}
`;

export const Title = styled.h2`
	margin: 0 0 0.75rem;
	font-weight: var(--fw-bold);

	@media (min-width: 1024px) {
		margin: 0 0 1.5rem;
	}
`;

export const InfoWrapper = styled.div`
	width: auto;

	@media (min-width: 576px) {
		max-width: 530px;
	}
`;

export const ListGroup = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	row-gap: 2rem;

	@media (min-width: 576px) {
		flex-direction: row;
	}
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
	flex-wrap: wrap;
	margin-top: 1rem;
	column-gap: 0.5rem;

	@media (min-width: 1024px) {
		margin-top: 2.5rem;
		column-gap: 1rem;
	}
`;

export const BordersTitle = styled.span`
	font-weight: var(--fw-normal);
`;

export const BordersList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	row-gap: 0.75rem;
	list-style: none;
	padding: 0;
	column-gap: 0.5rem;

	@media (min-width: 1024px) {
		column-gap: 1rem;
	}
`;

export const BorderListItem = styled.li`
	padding: 0.25rem 1rem;
	background-color: var(--colors-ui-base);
	box-shadow: var(--shadow);
	cursor: pointer;

	transition: 0.2s ease-in all;

	&:hover {
		transform: scale(1.1);
	}
`;
