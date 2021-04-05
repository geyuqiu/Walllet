import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Wallet } from "./Wallet";

describe("Wallet", () => {
	it("should match snapshot", () => {
		const { container } = render(
			<MemoryRouter>
				<Wallet />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
});
