export const parse = (value: string): string => {
	let replaced = value.replace(/[^0-9.,]/g, "").replace(/,/g, ".");

	replaced = replaceGreaterThan(replaced, /\./g, 2, "");
	const split = replaced.split(".");
	if (split.length > 1 && split[1].length > 8) {
		replaced = Number(replaced).toFixed(8);
	}
	return replaced;
};

const replaceGreaterThan = (s: string, regex: RegExp, index: number, replacedWith: string): string => {
	let i = 0;
	return s.replace(regex, (match: string) => {
		i += 1;
		if (i >= index) {
			return replacedWith;
		}
		return match;
	});
};

export const hundredMillion = Math.pow(10, 8);
