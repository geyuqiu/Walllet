import {render} from "@testing-library/react";
import React from "react";

import {Transaction} from './model';
import {hideTextBetween, TransactionRow} from "./TransactionRow";

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
				<TransactionRow transaction={transaction} address={''}/>
		);

		expect(container).toMatchSnapshot();
	});
});

describe("trimLongText", () => {
	it("return 5 characters as prefix and 6 characters as suffx", () => {
		const expected = hideTextBetween('AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW', 5, 6);

		expect(expected).toEqual('Adzbh...FgETuW');
	});
	it("return same number of characters as prefix and as suffx", () => {
		const expected = hideTextBetween('AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW', 5, 5);

		expect(expected).toEqual('Adzbh...gETuW');
	});
});
