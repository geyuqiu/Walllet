import React from "react";

import { Routing } from "../router/Routing";

const notProd = process.env.NODE_ENV !== "production";

export const App = () => {
	const showDebugScreensOnDev: string = notProd ? "debug-screens" : "";

	return (
		<>
			<section className={showDebugScreensOnDev} role="main" />
			<Routing />
		</>
	);
};
