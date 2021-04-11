export const inputRangeStyle = `
	input[type='range'] {
    background: linear-gradient(to right, #FBC457 0%, #FBC457 0%, #C7C9CD 0%, #C7C9CD 100%);
	  border-radius: 8px;
    width: 100%;
	  outline: none;
	  transition: background 450ms ease-in;
	  -webkit-appearance: none;
  }
  
  input[type=range]::-webkit-slider-thumb {
	  box-shadow: 1px 1px 1px #000000;
	  border: 2px solid;
	  height: 26px;
	  width: 12px;
	  border-radius: 22px;
	  background: white;
	  border-color: #029383;
	  cursor: pointer;
	  -webkit-appearance: none;
	  margin-top: -12px;
	}
	input[type=range]:hover::-webkit-slider-thumb{
	  border-color: #FBC457;
	}
	input[type=range]::-webkit-slider-runnable-track {
		height: 1px;
	  height: 4px;
	}
`;
