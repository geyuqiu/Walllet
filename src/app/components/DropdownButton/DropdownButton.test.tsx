import {render} from "@testing-library/react";
import React from "react";

import {DropdownButton} from "./DropdownButton";

describe("DropdownButton", () => {
	it("onOpen should match snapshot", () => {
		const { container } = render(<DropdownButton isOpen={true} label={<div/>}/>);

		expect(container).toMatchSnapshot();
	});

	it("onOpen should match snapshot", () => {
		const { container } = render(<DropdownButton isOpen={false} label={<div/>}/>);

		expect(container).toMatchSnapshot();
	});
});
