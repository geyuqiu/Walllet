import React, { useState } from "react";

export const FeeInput = () =>
	// {onChange}: Partial<FeeInputProps>
	{
		const [fee, feeChange] = useState("");
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
			feeChange(event.target.value);

		return (
			<>
				<label htmlFor="fee">Fee:</label>
				<input role="textbox" value={fee} />
				<input
					type="range"
					id="fee"
					name="fee"
					min="0"
					step="0.00000001"
					role="slider"
					onChange={handleChange}
				/>
			</>
		);
	};

type FeeInputProps = {
	onChange: any;
};
