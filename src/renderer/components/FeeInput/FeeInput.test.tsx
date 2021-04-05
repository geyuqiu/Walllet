import { render } from "@testing-library/react";
import React from "react";

import { FeeInput } from "./FeeInput";

describe("FeeInput", () => {
	it("should match snapshot", () => {
		const { container } = render(<FeeInput />);
		expect(container).toMatchSnapshot();
	});
});
