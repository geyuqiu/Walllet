import { render } from "@testing-library/react";
import React from "react";

import { TableRow } from "./TableRow";

describe("TableRow", () => {
	it("should render with border", () => {
		const { container } = render(
			<table>
				<tbody>
					<TableRow border={true} />
				</tbody>
			</table>,
		);
		expect(container).toMatchSnapshot();
	});

	it("should render without border", () => {
		const { container } = render(
			<table>
				<tbody>
					<TableRow border={false} />
				</tbody>
			</table>,
		);
		expect(container).toMatchSnapshot();
	});
});
