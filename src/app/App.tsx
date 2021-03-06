import React from "react";
import {HashRouter} from "react-router-dom";

import {Footer} from "./components/Footer/Footer";
import {Routing} from "./router/Routing";

const notProd = process.env.NODE_ENV !== "production";

export const App = () => {
	const mainClassName = "bg-white min-h-full";
	const showDebugScreensOnDev: string = notProd
		? `debug-screens ${mainClassName}`
		: mainClassName;

	return (
		<HashRouter>
			<main className={showDebugScreensOnDev} role="main">
				<Routing />
			</main>
			<Footer />
		</HashRouter>
	);
};
