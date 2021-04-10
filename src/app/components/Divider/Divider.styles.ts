import tw, {css} from "twin.macro";

const baseStyle = [tw`border-t border-solid`];

const getType = (type: string): any => {
	switch (type) {
		case "horizontal":
			return tw`flex clear-both w-full min-w-full my-6`;
		case "vertical":
			return tw`relative inline-block align-middle border-t-0 border-l border-solid mx-2`;
	}
};

const isDashed = (dashed: boolean): any => {
	if (dashed) {
		return [
			tw`border-dashed`,
			css`
				background: none;
				border-width: 1px 0 0;
			`,
		];
	}

	return null;
};

export const getStyles = ({ type, dashed }: { size?: string; type?: string; dashed?: boolean }) => [
	...baseStyle,
	getType(type!),
	isDashed(dashed!),
];
