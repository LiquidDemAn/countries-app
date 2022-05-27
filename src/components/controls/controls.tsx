import { Filter } from '../filter';
import { Search } from '../search';
import { ControlsWrapper } from './controls.styled';

export const Controls = () => {
	return (
		<ControlsWrapper>
			<Search />
			<Filter />
		</ControlsWrapper>
	);
};
