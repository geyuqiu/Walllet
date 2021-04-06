import { render } from "@testing-library/react";
import React from "react";

import { Wallet } from "./Wallet";

describe("Wallet", () => {
	it("should match snapshot", () => {
		const { container } = render(<Wallet />);
		expect(container).toMatchSnapshot();
	});
});
