import "./styles.css";

import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import { App } from "./components/App";

if (module.hot) {
	module.hot.accept();
}

render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.querySelector("#app")
);
