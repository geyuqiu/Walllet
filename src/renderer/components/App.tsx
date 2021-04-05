import React from "react";

import { Routing } from "../router/Routing";
import { Header } from "./Header/Header";

const notProd = process.env.NODE_ENV !== "production";

export const App = () => {
	const showDebugScreensOnDev: string = notProd ? "debug-screens" : "";

	return (
		<main className={showDebugScreensOnDev} role="main">
			<Header />
			<Routing />
		</main>
	);
};
