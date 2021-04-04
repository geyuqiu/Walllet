import React from "react";

const notProd = process.env.NODE_ENV !== "production";

export const App = () => {
	const showDebugScreensOnDev: string = notProd ? "debug-screens" : "";

	return (
		<section className={showDebugScreensOnDev} role="main">
			<h1 className="text-2xl font-bold">Hello</h1>
		</section>
	);
};
