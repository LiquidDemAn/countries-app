import { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { MenuIcon, LinkWrapper } from './menu.styled';
import { Menu } from '@mui/material';

export const MenuComponent = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<MenuIcon />
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>
					<LinkWrapper to=''>HomePage</LinkWrapper>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<LinkWrapper to='random-country'>RandomCountry</LinkWrapper>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<LinkWrapper to='comparison-countries'>
						ComparisonCountries
					</LinkWrapper>
				</MenuItem>
			</Menu>
		</div>
	);
};
