import styled from 'styled-components';

type InfoItemProps = {
	color?: 'red' | 'green' | 'default';
};

export const BlockWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SelectLabel = styled.label`
	display: flex;
	flex-direction: column;
	align-items: center;
	column-gap: 2rem;
	row-gap: 1rem;
	margin-bottom: 1.5rem;

	& > span {
		width: 120px;
	}

	@media (min-width: 576px) {
		flex-direction: row;
	}
`;

export const InfoWrapper = styled.section`
	display: flex;
	max-width: 450px;
	flex-direction: column;
	row-gap: 1.5rem;
`;

export const Flag = styled.img`
	max-width: 100%;
	height: 150px;

	@media (min-width: 576px) {
		height: 250px;
	}
`;

export const InfoList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	padding: 0;
	margin: 0;
	list-style: none;
`;

export const InfoItem = styled.li<InfoItemProps>`
	display: flex;
	column-gap: 10px;
	font-weight: var(--fw-normal);

	& > span {
		color: ${(props) =>
			props.color && props.color !== 'default'
				? props.color === 'green'
					? '#02d302'
					: '#cd0707'
				: 'var(--colors-text)'};
		font-weight: var(--fw-light);
	}
`;
