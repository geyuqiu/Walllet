import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Routing } from "./Routing";

describe("Routing", () => {
	it("should match snapshot", () => {
		const { container } = render(
			<MemoryRouter>
				<Routing />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
