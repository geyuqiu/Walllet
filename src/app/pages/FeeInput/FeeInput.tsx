import React, {useRef, useState} from "react";
import {styled} from "twin.macro";

import {hundredMillion, parse} from './FeeParser';
import {inputRangeStyle} from './InputRangeStyle';

const SliderWrapper = styled.div`
	${inputRangeStyle}
`;
const initialValue = '0';

export const FeeInput = ({onChange}: Partial<FeeInputProps>) => {
	const [sliderValue, setSliderValue] = useState(initialValue);
	const [textBoxValue, setTextBoxValue] = useState('currency: DARK');
	const onInputRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSliderValue(value);
		setTextBoxValue(value);
		setInputRangeColor('#FBC457', Number(value));
		setTextBoxColor();
	}

	const handleTextBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parse(event.target.value);
		setTextBoxValue(value);
		if (!value.endsWith('.')) {
			const nullSafe = !value ? initialValue : value;
			setSliderValue(nullSafe);
			setInputRangeColor('#046E62', Number(value));
			emitValueToSatoshi(nullSafe);
		}
	};

	const emitValueToSatoshi = (value: string): void => {
		if (onChange) {
			onChange(String(Number(value) * hundredMillion));
		}
	};
	const inputRangeRef = useRef<any>(null);
	const textBoxRef = useRef<any>(null);
	const labelRef = useRef<any>(null);

	const setInputRangeColor = (colorBeforeThumb: string, value: number) => {
		const inputRange = inputRangeRef.current;
		const newValue = (value - inputRange.min) / (inputRange.max - inputRange.min) * 100;
		inputRange.style.background = `linear-gradient(to right, ${colorBeforeThumb} 0%, ${colorBeforeThumb} ${newValue}%, #C7C9CD ${newValue}%, #C7C9CD 100%)`
	};

	const setTextBoxColor = () => textBoxRef.current.style.color = '#1F2121';

	const onTextBoxHover = () => labelRef.current.style.color = '#046E62';

	const exitTextBoxHover = () => labelRef.current.style.color = '#1F2121';

	return (
		<section className="p-12">
			<label htmlFor="fee" className="text-black-dark"
			       ref={labelRef}>Fee</label>
			<section onMouseEnter={onTextBoxHover} onMouseLeave={exitTextBoxHover}>
				<input role="textbox" placeholder="currency: DARK"
	        className="p-4 text-gray-darkest hover:border-green-darkest border-gray-darkest border border-solid rounded-full w-full focus:outline-none"
					onChange={handleTextBoxChange} value={textBoxValue}
	        ref={textBoxRef}
				/>
				<SliderWrapper>
					<input type="range" id="fee" name="fee" min="0" max="5" step="0.00000001" role="slider"
						onChange={onInputRangeChange} value={sliderValue}
					  ref={inputRangeRef}
					/>
				</SliderWrapper>
			</section>
		</section>
	);
};

type FeeInputProps = {
	onChange: Function;
};
