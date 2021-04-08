import {render} from "@testing-library/react";
import React from "react";

import {TableRow} from "./TableRow";
import {TableCell} from './TableCell';

describe("TableRow", () => {
	it("should render with border", () => {
		const { container } = render(
			<table>
				<tbody>
					<TableRow border={true}>
						<TableCell>
							something
						</TableCell>
					</TableRow>
				</tbody>
			</table>,
		);
		expect(container).toMatchSnapshot();
	});

	it("should render without border", () => {
		const { container } = render(
			<table>
				<tbody>
					<TableRow border={false} >
						<TableCell>
							something
						</TableCell>
					</TableRow>
				</tbody>
			</table>,
		);
		expect(container).toMatchSnapshot();
	});
});
