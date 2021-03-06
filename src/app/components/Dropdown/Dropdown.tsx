import cn from "classnames";
import React, {useEffect, useRef, useState} from "react";
import {styled} from "twin.macro";
import {Position, Size} from "types";

import {clickOutsideHandler} from '../../hooks/click-outside';
import {useViewportDropdown} from '../../hooks/useViewport';
import {Divider} from '../Divider/Divider';
import {Icon} from '../Icon/Icon';
import {defaultClasses, getStyles} from "./Dropdown.styles";

export type DropdownOption = {
	icon?: string;
	iconPosition?: "start" | "end";
	iconWidth?: number;
	iconHeight?: number;
	label: string;
	secondaryLabel?: string;
	value: string | number;
	disabled?: boolean;
};

export type DropdownOptionGroup = {
	key: string;
	title?: string;
	hasDivider?: boolean;
	options: DropdownOption[];
	onSelect?: any;
};

type DropdownProps = {
	as?: React.ElementType;
	children?: React.ReactNode;
	onSelect?: any;
	options?: any;
	position?: Position;
	dropdownClass?: string;
	toggleIcon: string;
	toggleSize?: Size;
	toggleContent?: any;
	disableToggle?: boolean;
	className?: string;
};

export const Wrapper = styled.div<{ position?: string; variant: string }>(getStyles);

const isOptionGroup = (options: DropdownOption | DropdownOptionGroup) =>
	(options as DropdownOptionGroup).key !== undefined;

const renderOptionGroup = ({ key, hasDivider, title, options }: DropdownOptionGroup, onSelect: any) =>
	options.length ? (
		<div key={key} className="mt-4 first:mt-0">
			{hasDivider && (
				<div className="mx-8 -my-2">
					<Divider className="border-theme-secondary-300 dark:border-theme-secondary-600" />
				</div>
			)}
			<ul>
				{title && (
					<li className="block px-5 text-xs font-bold text-left uppercase whitespace-nowrap text-theme-secondary-500 dark:text-theme-secondary-600">
						{title}
					</li>
				)}
				{renderOptions(options, onSelect, key)}
			</ul>
		</div>
	) : null;

const renderOptions = (options: DropdownOption[] | DropdownOptionGroup[], onSelect: any, key?: string) => {
	if (options.length && isOptionGroup(options[0])) {
		return (
			<div className="pt-5 pb-1">
				{(options as DropdownOptionGroup[]).map((optionGroup: DropdownOptionGroup) =>
					renderOptionGroup(optionGroup, onSelect),
				)}
			</div>
		);
	}

	const renderIcon = ({ icon, iconWidth, iconHeight }: DropdownOption) => (
		<Icon
			name={icon!}
			className="dark:text-theme-secondary-600 dark:group-hover:text-theme-secondary-200"
			width={iconWidth}
			height={iconHeight}
		/>
	);

	return (
		<ul data-testid="dropdown__options">
			{(options as DropdownOption[]).map((option: DropdownOption, index: number) => (
				<li
					aria-disabled={option.disabled}
					className={`group flex items-center space-x-2 py-4 px-5 text-sm text-left whitespace-nowrap ${
						option.disabled
							? "cursor-not-allowed select-none bg-theme-secondary-100 text-theme-secondary-400 dark:bg-theme-secondary-700 dark:text-theme-secondary-500"
							: "cursor-pointer text-white dark:text-theme-secondary-200 active:bg-green-darkest hover:bg-black-lightest dark:hover:bg-theme-primary-600 dark:hover:text-theme-secondary-200"
					}`}
					key={index}
					data-testid={`dropdown__option--${key ? `${key}-` : ""}${index}`}
					onClick={(e: any) => {
						if (option.disabled) {
							return;
						}
						onSelect?.(option);
						e.preventDefault();
						e.stopPropagation();
					}}
				>
					{option?.icon && option?.iconPosition === "start" && renderIcon(option)}
					<span>
						{option.label}
						{option.secondaryLabel && (
							<span className="ml-1 text-theme-secondary-500 dark:text-theme-secondary-600">
								{option.secondaryLabel}
							</span>
						)}
					</span>
					{option?.icon && option?.iconPosition !== "start" && renderIcon(option)}
				</li>
			))}
		</ul>
	);
};

const renderToggle = (isOpen: boolean, children: any, toggleIcon: string, toggleSize?: Size) => {
	// Default with toggleIcon
	const getSize = (size?: Size) => {
		switch (size) {
			case "sm":
				return 10;
			case "lg":
				return 30;
			default:
				return 20;
		}
	};

	if (!children) {
		const size = getSize(toggleSize);

		return (
			<div className="cursor-pointer outline-none focus:outline-none">
				<Icon name={toggleIcon} width={size} height={size} />
			</div>
		);
	}

	// Call children as a function and provide isOpen state
	if (typeof children === "function") {
		return children(isOpen);
	}

	// Render children as provided
	return children;
};

export const Dropdown = ({
	children,
	dropdownClass,
	options,
	onSelect,
	position,
	toggleIcon,
	toggleSize,
	toggleContent,
	disableToggle,
  className
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = (e: any) => {
		setIsOpen(!isOpen);
		e.preventDefault();
		e.stopPropagation();
	};

	const hide = () => setIsOpen(false);

	const select = (option: DropdownOption) => {
		setIsOpen(false);
		if (typeof onSelect === "function") {
			onSelect(option);
		}
	};

	const ref = useRef<any>(null);
	useViewportDropdown(isOpen, ref);

	useEffect(() => {
		clickOutsideHandler(ref, hide);
	}, [ref]);

	return (
		<div ref={ref} className={cn("relative", className)}>
			<span data-testid="dropdown__toggle" onClick={(event: any) => !disableToggle && toggle(event)}>
				{renderToggle(isOpen, toggleContent, toggleIcon, toggleSize)}
			</span>

			{isOpen && (
				<Wrapper
					data-testid="dropdown__content"
					position={position}
					variant={options ? "options" : "custom"}
					className={`opacity-0 ${defaultClasses} ${dropdownClass || ""}`}
				>
					{options?.length && renderOptions(options, select)}
					{children && <div>{children}</div>}
				</Wrapper>
			)}
		</div>
	);
};

Dropdown.defaultProps = {
	toggleIcon: "Settings",
	position: "right",
};
