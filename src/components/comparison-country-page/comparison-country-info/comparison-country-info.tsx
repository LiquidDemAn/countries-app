import { SelectOptionType } from '../../../typedef';
import { ComparisonCountryInfoType } from '../../../pages/comparison-countries-page/services/typedef';
import { CountiresSelect } from '../countries-select';
import {
	InfoWrapper,
	SelectLabel,
	Flag,
	BlockWrapper,
	InfoList,
	InfoItem,
} from './comparison-country-info.styled';

type Props = {
	renderInfo?: ComparisonCountryInfoType;
	comparisonInfo?: ComparisonCountryInfoType;
	options: SelectOptionType[];
	selectName: string;
	onChange: (newValue: unknown) => void;
};

const comparsion = (
	renderArgument: number = 0,
	comparsionArgumnet: number = 0
) => {
	if (renderArgument === comparsionArgumnet) {
		return 'default';
	}

	if (renderArgument > comparsionArgumnet) {
		return 'green';
	}

	return 'red';
};

export const ComparisonCountryInfo = ({
	options,
	selectName,
	onChange,
	renderInfo,
	comparisonInfo,
}: Props) => {
	return (
		<BlockWrapper>
			<SelectLabel>
				<span>{selectName}:</span>
				<CountiresSelect
					options={options}
					placeholder='Select country'
					isClearable
					onChange={onChange}
				/>
			</SelectLabel>
			{renderInfo && (
				<InfoWrapper>
					<Flag src={renderInfo.flag} alt={renderInfo.name} />
					<InfoList>
						<InfoItem>
							Name: <span>{renderInfo.name}</span>
						</InfoItem>
						<InfoItem
							color={
								comparisonInfo &&
								comparsion(renderInfo.population, comparisonInfo.population)
							}
						>
							Population: <span>{renderInfo.population}</span>
						</InfoItem>
						<InfoItem
							color={
								comparisonInfo &&
								comparsion(renderInfo.area, comparisonInfo.area)
							}
						>
							Area: <span>{renderInfo?.area}</span>
						</InfoItem>
						<InfoItem
							color={
								comparisonInfo &&
								comparsion(
									renderInfo.currencies.length,
									comparisonInfo.currencies.length
								)
							}
						>
							Currencies: <span>{renderInfo.currencies.join(', ')}</span>
						</InfoItem>
						<InfoItem
							color={
								comparisonInfo &&
								comparsion(
									renderInfo.languages.length,
									comparisonInfo.languages.length
								)
							}
						>
							Languages: <span>{renderInfo.languages.join(', ')}</span>
						</InfoItem>
					</InfoList>
				</InfoWrapper>
			)}
		</BlockWrapper>
	);
};
