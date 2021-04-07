import React from "react";
import {HashRouter} from "react-router-dom";

import {Routing} from "../router/Routing";
import {Footer} from "./Footer/Footer";

const notProd = process.env.NODE_ENV !== "production";

export const App = () => {
	const mainClassName = "bg-white min-h-70vh";
	const showDebugScreensOnDev: string = notProd
		? `debug-screens ${mainClassName}`
		: mainClassName;

	return (
		<HashRouter>
			{/*<Header />*/}
			<main className={showDebugScreensOnDev} role="main">
				<Routing />
			</main>
			<Footer />
		</HashRouter>
	);
};
