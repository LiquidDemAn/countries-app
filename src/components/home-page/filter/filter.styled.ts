import styled from 'styled-components';
import Select from 'react-select';

export const FilterSelect = styled(Select).attrs({
	styles: {
		control: (provided) => ({
			...provided,
			width: '200px',
			height: '50px',
			padding: '0.25rem',
			backgroundColor: 'var(--colors-ui-base)',
			color: 'var(--colors-text)',
			borderRadius: 'var(--radius)',
			border: 'none',
			boxShadow: 'var(--shadow)',
			cursor: 'pointer',
		}),

		option: (provided, state) => ({
			...provided,
			cursor: 'pointer',
			color: 'var(--colors-text)',
			backgroundColor: state.isSelected
				? 'var(--colors-bg)'
				: 'var(--colors-ui-base)',
		}),
	},
})`
	& > * {
		box-shadow: var(--shadow);
	}

	& * {
		color: var(--colors-text) !important;
	}

	& > div[id] {
		background-color: var(--colors-bg);
	}
`;
