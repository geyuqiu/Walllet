import {render, screen} from "@testing-library/react";
import React from "react";

import {Icon} from "./Icon";

describe("Icon", () => {
	it("should render", () => {
		const { container, asFragment } = render(<Icon name="ARK" />);

		expect(container).toBeTruthy();
		expect(asFragment()).toMatchSnapshot();
	});

	it("should render fallback", () => {
		const { asFragment } = render(<Icon name="unknown" fallback={<span>Not found</span>} />);

		expect(screen.getByText("Not found"));

		expect(asFragment()).toMatchSnapshot();
	});
});
