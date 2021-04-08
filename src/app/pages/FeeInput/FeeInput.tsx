import React, {useRef, useState} from "react";
import {styled} from "twin.macro";

import {hundredMillion, parse} from './FeeParser';
import {inputRangeStyle} from './InputRangeStyle';

const SliderWrapper = styled.div`
	${inputRangeStyle}
`;

export const FeeInput = ({onChange}: Partial<FeeInputProps>) => {
	const [fee, updateFee] = useState("0");
	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		updateFee(event.target.value);

	const handleTextBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parse(event.target.value);
		updateFee(value);
		emitValueToSatoshi(value);
	};

	const emitValueToSatoshi = (value: string): void => {
		if (onChange) {
			onChange(String(Number(value) * hundredMillion));
		}
	};
	const inputRangeRef = useRef<any>(null);
	const onInput = () => {
		const elem = inputRangeRef.current;
		const newValue = (elem.value - elem.min) / (elem.max - elem.min) * 100;
		elem.style.background = `linear-gradient(to right, #FBC457 0%, #FBC457 ${newValue}%, #C7C9CD ${newValue}%, #C7C9CD 100%)`
	};

	return (
		<>
			<label htmlFor="fee" className="text-black-dark">Fee:</label>
			<input role="textbox" placeholder="Simple Text"
				onChange={handleTextBoxChange} value={fee}
			/>
			<SliderWrapper>
				<input type="range" id="fee" name="fee" min="0" max="5" step="0.00000001" role="slider"
					onChange={handleSliderChange} value={fee}
				  ref={inputRangeRef} onInput={onInput} onFocus={onInput}
				/>
			</SliderWrapper>
		</>
	);
};

type FeeInputProps = {
	onChange: Function;
};
