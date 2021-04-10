import React, {useRef, useState} from "react";
import {styled} from "twin.macro";

import {BackButton} from '../../components/BackButton/BackButton';
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
		setTextBoxStyles();
		setInputRangeColor('#FBC457', Number(value));
	}

	const handleTextBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parse(event.target.value);
		setTextBoxValue(value);
		setTextBoxStyles();
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

	const setTextBoxStyles = () => {
		textBoxRef.current.style.color = '#1F2121';
		textBoxRef.current.style.fontWeight = '600';
	}

	const onTextBoxHover = () => labelRef.current.style.color = '#046E62';

	const exitTextBoxHover = () => labelRef.current.style.color = '#1F2121';

	return (
		<section className="p-12 w-1/2">
			<BackButton className="mb-4"/>
			<label className="text-black-dark pl-6 leading-relaxed font-semibold"
			       ref={labelRef}>Fee</label>
			<section onMouseEnter={onTextBoxHover} onMouseLeave={exitTextBoxHover}>
				<input role="textbox" placeholder="currency: DARK"
	        className="p-4 text-gray-darkest hover:border-green-darkest border-gray-darkest border border-solid rounded-50vh w-full focus:outline-none"
					onChange={handleTextBoxChange} value={textBoxValue}
	        ref={textBoxRef}
				/>
				<section className="px-6">
					<SliderWrapper>
						<input type="range" id="fee" name="fee" min="0" max="5" step="0.00000001" role="slider"
							onChange={onInputRangeChange} value={sliderValue}
						  ref={inputRangeRef}
						/>
					</SliderWrapper>
				</section>
			</section>
		</section>
	);
};

type FeeInputProps = {
	onChange: Function;
};
