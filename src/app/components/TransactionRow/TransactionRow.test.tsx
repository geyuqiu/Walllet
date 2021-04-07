import {render} from "@testing-library/react";
import React from "react";

import {TransactionRow} from "./TransactionRow";
import {Transaction} from './model';

describe("Footer", () => {
	it("should match snapshot", () => {
		const transaction = {
			id: "77a740c7517ae164b35e4e28da7251543d9d98e34e90d3baf604fc582159c352",
			amount: "100000000000000",
			fee: "1000000",
			sender: "AReY3W6nTv3utiG2em5nefKEsGQeqEVPN4",
			recipient: "AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW",
			timestamp: "2021-04-01T11:41:20.000Z"
		} as Transaction;

		const { container } = render(
				<TransactionRow transaction={transaction}/>
		);

		expect(container).toMatchSnapshot();
	});
});
