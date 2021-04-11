import React from "react";
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

import {SvgCollection} from '../../../assets/svg';

type LogoContainerProps = {
	width: number;
}

const LogoContainer = styled.div<LogoContainerProps>`
  ${({width}) => width && `
    width: ${width}px;
  `};
  height: auto;
`;

const {Logo} = SvgCollection;

export const LogoTitle = () => {
	const history = useHistory();

	return (
		<div className="flex items-center my-auto cursor-pointer" onClick={() => history.push('/fee')}>
			<LogoContainer width={57}>
				<Logo width={44}/>
			</LogoContainer>

			<span className="text-2xl font-bold lg:hidden xl:block" data-testid="logo__text">ARK Wallet</span>
		</div>
	);
};
