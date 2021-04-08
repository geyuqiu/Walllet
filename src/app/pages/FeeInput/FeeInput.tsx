import React, {useEffect, useRef, useState} from "react";
import {styled} from "twin.macro";

import {hundredMillion, parse} from './FeeParser';
import {inputRangeStyle} from './InputRangeStyle';

const SliderWrapper = styled.div`
	${inputRangeStyle}
`;

export const FeeInput = ({onChange}: Partial<FeeInputProps>) => {
	const [fee, updateFee] = useState("0");
	const onInputRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateFee(event.target.value);
		setInputRangeColor();
		setTextBoxColor();
	}

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
	const textBoxRef = useRef<any>(null);
	const labelRef = useRef<any>(null);

	const setInputRangeColor = () => {
		const inputRange = inputRangeRef.current;
		const newValue = (inputRange.value - inputRange.min) / (inputRange.max - inputRange.min) * 100;
		inputRange.style.background = `linear-gradient(to right, #FBC457 0%, #FBC457 ${newValue}%, #C7C9CD ${newValue}%, #C7C9CD 100%)`
	};

	const setTextBoxColor = () => {
		textBoxRef.current.style.color = '#1F2121';
	};

	const onTextBoxHover = () => {
		labelRef.current.style.color = '#046E62';
	}

	const exitTextBoxHover = () => {
		labelRef.current.style.color = '#1F2121';
	}

	useEffect(() => {
		textBoxRef.current.value = '';
	}, []);

	return (
		<>
			<label htmlFor="fee" className="text-black-dark focus:outline-none"
			       ref={labelRef}>Fee</label>
			<section onMouseEnter={onTextBoxHover} onMouseLeave={exitTextBoxHover}>
				<input role="textbox" placeholder="currency: DARK"
	        className="p-4 text-gray-darkest hover:border-green-darkest border-gray-darkest border border-solid rounded-full w-full focus:outline-none"
					onChange={handleTextBoxChange} value={fee}
	        ref={textBoxRef}
				/>
				<SliderWrapper>
					<input type="range" id="fee" name="fee" min="0" max="5" step="0.00000001" role="slider"
						onChange={onInputRangeChange} value={fee}
					  ref={inputRangeRef}
					/>
				</SliderWrapper>
			</section>
		</>
	);
};

type FeeInputProps = {
	onChange: Function;
};
