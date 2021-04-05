import React, { useState } from "react";

export const FeeInput = ({ onChange }: Partial<FeeInputProps>) => {
	const [fee, feeChange] = useState("0");
	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		feeChange(event.target.value);

	const hundredMillion = Math.pow(10, 8);

	const handleTextBoxChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
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
		let replaced = value.replace(/,/g, ".");

		replaced = replaceGreaterThan(replaced, /\./g, 2, "");
		replaced = String(
			Math.round(Number(replaced) * hundredMillion) / hundredMillion
		);
		return replaced;
	};

	const replaceGreaterThan = (
		s: string,
		regex: RegExp,
		index: number,
		replacedWith: string
	): string => {
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
			<input
				role="textbox"
				value={fee}
				placeholder="Simple Text"
				onChange={handleTextBoxChange}
			/>
			<input
				type="range"
				id="fee"
				name="fee"
				min="0"
				step="0.00000001"
				role="slider"
				onChange={handleSliderChange}
				value={fee}
			/>
		</>
	);
};

type FeeInputProps = {
	onChange: Function;
};
