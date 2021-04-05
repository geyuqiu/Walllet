import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Footer } from "./Footer";

describe("Footer", () => {
	it("should match snapshot", () => {
		const { container } = render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
