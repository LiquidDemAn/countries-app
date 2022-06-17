import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { Container } from '../container';
import { MenuComponent } from '../menu';
import {
	HeaderEl,
	HeaderWrapper,
	HeaderTitle,
	ModeSwitcher,
} from './header.styled';

type ThemeType = 'light' | 'dark';

export const Header = () => {
	const [theme, setTheme] = useState<ThemeType>('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<HeaderEl>
			<Container>
				<HeaderWrapper>
					<HeaderTitle>Where is the world?</HeaderTitle>
					<MenuComponent />
					<ModeSwitcher onClick={toggleTheme}>
						{theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
						<span>{theme} Theme</span>
					</ModeSwitcher>
				</HeaderWrapper>
			</Container>
		</HeaderEl>
	);
};
