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
	  border: 2px solid;
	  height: 26px;
	  width: 12px;
	  border-radius: 22px;
	  background: white;
	  cursor: pointer;
	  -webkit-appearance: none;
	  margin-top: -12px;
	  border-color: #029383;
	}
	input[type=range]:hover::-webkit-slider-thumb{
	  border-color: #FBC457;
	}
	input[type=range]::-webkit-slider-runnable-track {
	  height: 2px;
	}
	
	.yellow::-webkit-slider-thumb {
	  border-color: #FBC457 !important;
	}
`;
