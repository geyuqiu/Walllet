export const sliderStyle = `
	input[type='range'] {
    background: linear-gradient(to right, #FBC457 0%, #FBC457 50%, #C7C9CD 50%, #C7C9CD 100%);
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
	  margin-top: -6.5px;
	}
	input[type=range]:hover::-webkit-slider-thumb{
	  background: #FBC457;
	}
	input[type=range]::-webkit-slider-runnable-track {
	  height: 4px;
	}
`;
