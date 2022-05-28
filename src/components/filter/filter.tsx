import { useState } from 'react';
import { FilterSelect } from './filter.styled';

type Option = { value: string; label: string };

const options: Option[] = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
];

export const Filter = () => {
	const [region, setRegion] = useState('');

	const onChange = (newValue: any) => {
		setRegion(newValue);
	};

	return (
		<FilterSelect
			options={options}
			placeholder='Filter by region'
			isClearable
			isSearchable={false}
			value={region}
			onChange={onChange}
		/>
	);
};
