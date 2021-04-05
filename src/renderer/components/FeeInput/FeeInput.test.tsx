import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { FeeInput } from "./FeeInput";

describe("FeeInput", () => {
	it("should match snapshot", () => {
		const { container } = render(
			<MemoryRouter>
				<FeeInput />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
