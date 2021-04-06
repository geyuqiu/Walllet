import { render } from "@testing-library/react";
import React from "react";

import { Table } from "./Table";

describe("Table", () => {
	it("should match snapshot", () => {
		const { container } = render(<Table />);
		expect(container).toMatchSnapshot();
	});
});
