import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Header } from "./Header";

describe("Header", () => {
	it("should match snapshot", () => {
		const { container } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
