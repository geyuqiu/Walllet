import {render} from "@testing-library/react";
import React from "react";

import {DropdownButton} from "./DropdownButton";

describe("WalletCard", () => {
	it("should match snapshot", () => {
		const { container } = render(<DropdownButton/>);

		expect(container).toMatchSnapshot();
	});

});
