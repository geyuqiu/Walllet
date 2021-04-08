export const sliderStyle = `
	input[type=range] {
	  height: 24px;
	  -webkit-appearance: none;
	  margin: 10px 0;
	  width: 100%;
	}
	input[type=range]:focus {
	  outline: none;
	}
	input[type=range]::-webkit-slider-runnable-track {
	  width: 100%;
	  height: 2px;
	  cursor: pointer;
	  animate: 0.2s;
	  box-shadow: 1px 1px 1px #000000;
	  background: #A9A6A2;
	  border-radius: 6px;
	  border: 1px solid #FFFAF5;
	}
	input[type=range]::-webkit-slider-thumb {
	  box-shadow: 1px 1px 1px #000000;
	  border: 1px solid #000000;
	  height: 16px;
	  width: 6px;
	  border-radius: 22px;
	  background: #029383;
	  cursor: pointer;
	  -webkit-appearance: none;
	  margin-top: -8px;
	}
	input[type=range]:focus::-webkit-slider-runnable-track {
	  background: #A9A6A2;
	}
	input[type=range]::-moz-range-track {
	  width: 100%;
	  height: 2px;
	  cursor: pointer;
	  animate: 0.2s;
	  box-shadow: 1px 1px 1px #000000;
	  background: #A9A6A2;
	  border-radius: 6px;
	  border: 1px solid #FFFAF5;
	}
	input[type=range]::-moz-range-thumb {
	  box-shadow: 1px 1px 1px #000000;
	  border: 1px solid #000000;
	  height: 16px;
	  width: 6px;
	  border-radius: 22px;
	  background: #FFFFFF;
	  cursor: pointer;
	}
	input[type=range]::-ms-track {
	  width: 100%;
	  height: 2px;
	  cursor: pointer;
	  animate: 0.2s;
	  background: transparent;
	  border-color: transparent;
	  color: transparent;
	}
	input[type=range]::-ms-fill-lower {
	  background: #A9A6A2;
	  border: 1px solid #FFFAF5;
	  border-radius: 12px;
	  box-shadow: 1px 1px 1px #000000;
	}
	input[type=range]::-ms-fill-upper {
	  background: #A9A6A2;
	  border: 1px solid #FFFAF5;
	  border-radius: 12px;
	  box-shadow: 1px 1px 1px #000000;
	}
	input[type=range]::-ms-thumb {
	  margin-top: 1px;
	  box-shadow: 1px 1px 1px #000000;
	  border: 1px solid #000000;
	  height: 16px;
	  width: 6px;
	  border-radius: 22px;
	  background: #FFFFFF;
	  cursor: pointer;
	}
	input[type=range]:focus::-ms-fill-lower {
	  background: #A9A6A2;
	}
	input[type=range]:focus::-ms-fill-upper {
	  background: #A9A6A2;
	}
`;
