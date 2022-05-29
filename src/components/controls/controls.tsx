import { ReactElement } from 'react';
import { ControlsWrapper } from './controls.styled';

type Props = {
	children: ReactElement | ReactElement[];
};

export const Controls = ({ children }: Props) => {
	return <ControlsWrapper>{children}</ControlsWrapper>;
};
