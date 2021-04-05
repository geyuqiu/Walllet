import React from "react";

import { Routing } from "../router/Routing";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

const notProd = process.env.NODE_ENV !== "production";

export const App = () => {
	const showDebugScreensOnDev: string = notProd
		? "debug-screens flex flex-col min-h-screen"
		: "";

	return (
		<main className={showDebugScreensOnDev} role="main">
			<Header />
			<Footer />
			<Routing />
		</main>
	);
};
