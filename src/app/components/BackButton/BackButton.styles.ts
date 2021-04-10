import tw from "twin.macro";

const baseStyles = tw`flex items-center w-12 transition-colors duration-200`;

const getVariant = (disabled?: boolean) =>
	disabled
		? tw`text-theme-secondary-500 dark:text-theme-secondary-800 cursor-not-allowed`
		: tw`text-theme-primary-600 dark:text-theme-secondary-200 hover:bg-theme-primary-100 hover:dark:bg-theme-secondary-800`;

export const getStyles = ({ disabled }: { disabled?: boolean }) => [baseStyles, getVariant(disabled)];
