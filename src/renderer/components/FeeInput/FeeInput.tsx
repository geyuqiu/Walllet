import React, { useState } from "react";

export const FeeInput = ({ onChange }: Partial<FeeInputProps>) => {
	const [fee, feeChange] = useState("");
	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		feeChange(event.target.value);
	const handleTextBoxChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		feeChange(event.target.value);

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
			/>
		</>
	);
};

type FeeInputProps = {
	onChange: any;
};
