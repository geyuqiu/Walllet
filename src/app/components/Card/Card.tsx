import React from "react";

import {Wrapper} from "./Card.styles";

type CardProps = {
	children: React.ReactNode;
	addonIcons?: React.ReactNode;
	className?: string;
};

export const Card = ({ children, className }: CardProps) => (
	<Wrapper className={className} data-testid="Card">
		{children}
	</Wrapper>
);
