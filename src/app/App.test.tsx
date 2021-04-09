import {render, screen} from "@testing-library/react";
import React from "react";
import {MemoryRouter} from "react-router-dom";

import {App} from "./App";

describe("App", () => {
	it("should match snapshot", () => {
		const { container } = render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});

	it("should show debug in TEST ENV", () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByRole("main")).toHaveClass("debug-screens");
	});
});
