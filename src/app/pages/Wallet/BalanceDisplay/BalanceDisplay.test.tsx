import {render} from "@testing-library/react";
import React from "react";

import {BalanceDisplay} from "./BalanceDisplay";

describe("BalanceDisplay", () => {

	it("valid wallet should match snapshot", () => {
		const { container } = render(<BalanceDisplay wallet={{
			address: 'AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW',
			balance: '0'
		}}/>);

		expect(container).toMatchSnapshot();
	});

	it("wallet is null, should match snapshot", () => {
		const { container } = render(<BalanceDisplay wallet={null}/>);

		expect(container).toMatchSnapshot();
	});
});
