export const sliderStyle = `
	input[type='range'] {
    background: linear-gradient(to right, #82CFD0 0%, #82CFD0 50%, #fff 50%, #fff 100%);
	  border: solid 1px #82CFD0;
	  border-radius: 8px;
    width: 100%;
	  outline: none;
	  transition: background 450ms ease-in;
	  -webkit-appearance: none;
  }
  
  input[type=range]::-webkit-slider-thumb {
	  box-shadow: 1px 1px 1px #000000;
	  border: 1px solid #000000;
	  height: 16px;
	  width: 6px;
	  border-radius: 22px;
	  background: #E8FBFF;
	  cursor: pointer;
	  -webkit-appearance: none;
	  margin-top: -6px;
	}
	input[type=range]::-webkit-slider-runnable-track {
		box-shadow: 1px 1px 1px #000000;
	  height: 4px;
	  border: 1px solid #FFFAF5;
	}
`;
