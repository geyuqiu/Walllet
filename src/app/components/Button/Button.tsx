import {Spinner} from "app/components/Spinner";
import React from "react";
import {styled} from "twin.macro";
import {Size} from "types";

import {Icon} from '../Icon/Icon';
import {getStyles} from "./Button.styles";

type ButtonProps = {
	size?: Size;
	isLoading?: boolean;
	icon?: string;
	iconWidth?: number | string;
	iconHeight?: number | string;
} & React.ButtonHTMLAttributes<any>;

const StyledButton = styled.button<ButtonProps>(getStyles);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, icon, isLoading, iconWidth = 14, iconHeight = 14, ...props }: ButtonProps, ref) => {
		const renderContent = () => {
			if (isLoading) {
				return (
					<div className="flex relative items-center">
						<span className="flex invisible items-center space-x-2">
							{icon && <Icon name={icon} width={iconWidth} height={iconHeight} />}
							{children}
						</span>

						<div className="absolute top-0 right-0 bottom-0 left-0">
							<Spinner size="sm" className="m-auto" />
						</div>
					</div>
				);
			}

			return (
				<>
					{icon && <Icon name={icon} width={iconWidth} height={iconHeight} />}
					{children}
				</>
			);
		};

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
