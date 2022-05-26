import React, { useState } from 'react';
import { FilterSelect } from './filter.styled';

const options = [
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

	console.log(region);

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
