import React from "react";
import {styled} from "twin.macro";
import {Size} from "types";

import {Icon} from '../Icon/Icon';
import {getStyles} from "./Button.styles";

type ButtonProps = {
	size?: Size;
	icon?: string;
	iconWidth?: number | string;
	iconHeight?: number | string;
	fill?: string;
	stroke?: string;
} & React.ButtonHTMLAttributes<any>;

const StyledButton = styled.button<ButtonProps>(getStyles);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, icon, iconWidth = 14, iconHeight = 14, fill, stroke, ...props }: ButtonProps, ref) => {
		const renderContent = () => (
				<>
					{icon && <Icon name={icon} width={iconWidth} height={iconHeight} fill={fill} stroke={stroke}/>}
					{children}
				</>
			);

		return (
			<StyledButton {...props} ref={ref}>
				<div className="flex relative items-center space-x-2">{renderContent()}</div>
			</StyledButton>
		);
	},
);

Button.defaultProps = {
	type: "button",
};

Button.displayName = "Button";
