import styled from 'styled-components';
import Select from 'react-select';

export const FilterSelect = styled(Select).attrs({
	styles: {
		control: (provided) => ({
			...provided,
			backgroundColor: 'var(--colors-ui-base)',
			color: 'var(--colors-text)',
			borderRadius: 'var(--radius)',
			padding: '0.25rem',
			border: 'none',
			boxShadow: 'var(--shadow)',
			height: '50px',
		}),

		option: (provided, state) => ({
			...provided,
			cursor: 'pointer',
			color: 'var(--colors-text)',
			backgroundColor: 'var(--colors-bg)',
			// backgroundColor: state.isSelected
			// ? 'var(--colors-bg)'
			// : 'var(--colors-ui-base)',
		}),
	},
})``;
