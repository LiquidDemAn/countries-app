import { IoSearch } from 'react-icons/io5';
import { SearchContainer, SearchInput } from './search.styled';

type Props = {
	search: string;
	handlerSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ search, handlerSearch }: Props) => {
	return (
		<SearchContainer>
			<IoSearch />
			<SearchInput value={search} onChange={handlerSearch} />
		</SearchContainer>
	);
};
