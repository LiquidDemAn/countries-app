import { IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuIcon = styled(IoMenuOutline)`
	color: var(--colors-text);
	font-size: 1.75rem;
`;

export const LinkWrapper = styled(Link)`
	color: var(--colors-ui-base);
	text-decoration: none;
`;
