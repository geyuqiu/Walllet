import {Icon} from "app/components/Icon/Icon";
import cn from 'classnames';
import React from "react";

import {Circle} from '../Circle/Circle';

type DropdownButtonProps = {
	isOpen: boolean;
	label: React.ReactNode
}

export const DropdownButton = ({isOpen, label}: DropdownButtonProps) => {
	return (
		<button className="flex justify-between items-center h-11 w-full">
			<div className="flex items-center">
				<div className="hidden sm:block">
					<Circle className="rounded-l-3xl border-r bg-black-light" size="lg">
						<Icon name="Address" width={15} height={15} fill='#000000' stroke='#FBC457' className="ml-2"
						      data-testid="dropdown__left__icon"/>
					</Circle>
				</div>
				{label}
			</div>
			<Icon width={15} height={15} data-testid="dropdown__right_icon"
			      name="ArrowDown"
			      className={cn("transition-transform", "mx-5", {
				      "transform rotate-180":
					      isOpen,
			      })}
			/>
		</button>
	);
};

DropdownButton.defaultProps = {
	isOpen: false,
};
