import {Icon} from "app/components/Icon/Icon";
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
			<Icon width={15} height={15} className="mx-5" data-testid="dropdown__right_icon"
			      name={isOpen ? "ArrowUp" : "ChevronDown"}
			/>
		</button>
	);
};

DropdownButton.defaultProps = {
	isOpen: false,
};
