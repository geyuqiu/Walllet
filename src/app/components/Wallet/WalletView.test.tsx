import {render} from "@testing-library/react";
import React from "react";

import {WalletView} from "./WalletView";

describe("WalletView", () => {
	it("should match snapshot", () => {
		const { container } = render(<WalletView />);
		expect(container).toMatchSnapshot();
	});
});
