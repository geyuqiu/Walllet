import React, {useState} from "react";

export const FeeInput = ({onChange}: Partial<FeeInputProps>) => {
	const [fee, feeChange] = useState("0");
	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		feeChange(event.target.value);

	const hundredMillion = Math.pow(10, 8);

	const handleTextBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parse(event.target.value);
		feeChange(value);
		emitValueToSatoshi(value);
	};

	const emitValueToSatoshi = (value: string): void => {
		if (onChange) {
			onChange(String(Number(value) * hundredMillion));
		}
	};

	const parse = (value: string): string => {
		let replaced = value.replace(/[^0-9.,]/g, "").replace(/,/g, ".");

		replaced = replaceGreaterThan(replaced, /\./g, 2, "");
		const split = replaced.split(".");
		if (split.length > 1 && split[1].length > 8)
			replaced = Number(replaced).toFixed(8);
		return replaced;
	};

	const replaceGreaterThan = (s: string, regex: RegExp, index: number, replacedWith: string): string => {
		let i = 0;
		return s.replace(regex, (match: string) => {
			i += 1;
			if (i >= index) return replacedWith;
			return match;
		});
	};

	return (
		<>
			<label htmlFor="fee">Fee:</label>
			<input role="textbox" placeholder="Simple Text"
				onChange={handleTextBoxChange} value={fee}
			/>
			<input type="range" id="fee" name="fee" min="0" max="5" step="0.00000001" role="slider"
				onChange={handleSliderChange}
				value={fee}
			/>
		</>
	);
};

type FeeInputProps = {
	onChange: Function;
};