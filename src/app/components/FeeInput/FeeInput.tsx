import React, {useState} from "react";

import {hundredMillion, parse} from './FeeParser';

export const FeeInput = ({onChange}: Partial<FeeInputProps>) => {
	const [fee, feeChange] = useState("0");
	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		feeChange(event.target.value);

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
