import React, { useState } from "react";

export const FeeInput = ({ onChange }: Partial<FeeInputProps>) => {
	const [fee, feeChange] = useState("");
	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		feeChange(event.target.value);

	const handleTextBoxChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value;
		feeChange(value);
		emitValueToSatoshi(value);
	};

	const emitValueToSatoshi = (value: string) => {
		if (onChange) onChange(String(Number(value) * Math.pow(10, 8)));
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
