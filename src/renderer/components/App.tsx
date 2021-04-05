import React from "react";
import { HashRouter } from "react-router-dom";

import { Routing } from "../router/Routing";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

const notProd = process.env.NODE_ENV !== "production";

export const App = () => {
	const showDebugScreensOnDev: string = notProd
		? "debug-screens bg-white min-h-70vh"
		: "";

	return (
		<HashRouter>
			<Header />
			<main className={showDebugScreensOnDev} role="main">
				<Routing />
			</main>
			<Footer />
		</HashRouter>
	);
};
