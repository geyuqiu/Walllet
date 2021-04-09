import {render} from "@testing-library/react";
import React from "react";

import {Link} from "./Link";

describe("Link", () => {
	it("should render", () => {
		const { container } = render(
			<Link href="https://test.de"
			      className="text-green-dark hover:text-green-darkest active:text-green-light font-semibold hover:underline">link
			</Link>
		);

		expect(container).toMatchSnapshot();
	});
});
