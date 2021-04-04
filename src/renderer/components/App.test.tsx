import { render, screen } from "@testing-library/react";
import React from "react";

import { App } from "./App";

describe("App", () => {
	it("should render heading", () => {
		render(<App />);
		expect(screen.getByRole("heading")).toHaveTextContent("Hello");
	});

	it("should match snapshot", () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});

	it("should show debug in TEST ENV", () => {
		render(<App />);
		expect(screen.getByRole("main")).toHaveClass("debug-screens");
	});
});
