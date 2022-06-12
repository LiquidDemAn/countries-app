import { SelectOptionType } from '../../typedef';
import { CountiresSelect } from '../countries-select';
import { Wrapper } from './comparison-country-info.styled';

type Props = {
	options: SelectOptionType[];
	selectName: string;
	onChange: (newValue: unknown) => void;
};

export const ComparisonCountryInfo = ({
	options,
	selectName,
	onChange,
}: Props) => {
	return (
		<Wrapper>
			<span>{selectName}:</span>
			<CountiresSelect
				options={options}
				placeholder='Select country'
				isClearable
				onChange={onChange}
			/>
		</Wrapper>
	);
};
