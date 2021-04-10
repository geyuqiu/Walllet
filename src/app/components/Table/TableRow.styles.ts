import tw, {css} from "twin.macro";

import {TableRowFunction} from "./TableRow";

const baseStyle = tw`transition-colors duration-100`;

const getCursorStyles = (onClick?: TableRowFunction): any => (onClick ? tw`cursor-pointer` : "");

const getBorderStyles = (border?: boolean): any =>
	border ? tw`border-b last:border-b-0 border-solid border-theme-secondary-300` : "";

const getHoverStyles = (isSelected?: boolean): any =>
	css`
		@media
		  only screen 
	    and (min-width: 767px) {
			&:hover td {
				${isSelected
					? tw`bg-green-lightest`
					: tw`bg-gray-lightest`}
			}
		}
	`;

export const getStyles = ({ onClick, border, isSelected }: any) => {
	const styles = [baseStyle, getBorderStyles(border), getCursorStyles(onClick)];

	styles.push(getHoverStyles(isSelected));

	return styles;
};
