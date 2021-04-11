import {render} from "@testing-library/react";
import React from "react";

import {TransactionTable} from "./TransactionTable";

describe("TransactionTable", () => {
	it("isLoadingTransactions should match snapshot", () => {
		const {getAllByTestId, container} = render(<TransactionTable isLoadingTransactions/>);
		expect(getAllByTestId("TransactionTable__Loading")).toHaveLength(1);
		expect(container).toMatchSnapshot();
	});

	it("transactions empty for selected address should match snapshot", () => {
		const {getAllByTestId, container} = render(<TransactionTable
			transactions={[]} isLoadingTransactions={false}
			wallet={{
				address: 'AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW',
				balance: '0'
			}}/>);

		expect(getAllByTestId("TransactionTable__No_Transactions")).toHaveLength(1);
		expect(container).toMatchSnapshot();
	});

	it("display n transactions should match snapshot", () => {
		const transactions = [
			{
				id: "6eba34e4513918928313567d5c60fcb9635f75dbb0af0164e58c59216efe6749",
				blockId: "8b03f113fc3ee743411a3be687db96ab312e0e6be10e9a71eb9c705e04be4968",
				version: 2,
				type: 0,
				typeGroup: 1,
				amount: "1004310900000",
				fee: "1000000",
				sender: "AVyqDoLngpCnmqDtEicmYcNbezAKPLhRjv",
				senderPublicKey: "03f46c15d483e099b8c1ad277aa0341fd24e4052a835f848d72ca8632d1f16cf60",
				recipient: "AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW",
				signature: "095e77ea3c8072a80f8855d114abbf4a66cfa700918b50305390eafd19948df7d6edfb2ede299d857f4bf95daceecc990729b0194d80575f2cf92bf61e1d0895",
				confirmations: 17615,
				timestamp: "10.04.2021",
				nonce: 1544
			},
			{
				id: "b4f53e85e7a6ec275663bfbfc4e4f5a1394a2d6f9b36626b63488f39426bbe19",
				blockId: "dd3e223903d78436d16b2f95a3d47f9f6732718770625f84ee5a7c1d9e9e3202",
				version: 2,
				type: 0,
				typeGroup: 1,
				amount: "1046145300000",
				fee: "1000000",
				sender: "AVyqDoLngpCnmqDtEicmYcNbezAKPLhRjv",
				senderPublicKey: "03f46c15d483e099b8c1ad277aa0341fd24e4052a835f848d72ca8632d1f16cf60",
				recipient: "AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW",
				signature: "079908f962274da5a2b01b6c36cb81b3367542be1733d93f9e405ed98ea9b0f8adb22f7b1d8233f2837fd740a7933d354a74caa4a4fe79b7f1a522965de0da79",
				confirmations: 17616,
				timestamp: "10.04.2021",
				nonce: 1543
			},
			{
				id: "3f3f28f3d96b19e3a8424b7d0a1fa13a00d2bd1dca8a564a587c39ea9ec5cccc",
				blockId: "db694d8d64cce9a4de5902725a56ec4314842596acd2b2becb0f45b08e1288ff",
				version: 2,
				type: 0,
				typeGroup: 1,
				amount: "1047909000000",
				fee: "1000000",
				sender: "AVyqDoLngpCnmqDtEicmYcNbezAKPLhRjv",
				senderPublicKey: "03f46c15d483e099b8c1ad277aa0341fd24e4052a835f848d72ca8632d1f16cf60",
				recipient: "AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW",
				signature: "9be24d4cec81c2f6efcdba2b0bd452d97ca35bc9c80f0fb398998e11b1396bf4055af6b58aec9e5fbc6de38d2f7bf4b4f2b73766ffbd37425b03718ccf23ad49",
				confirmations: 17617,
				timestamp: "10.04.2021",
				nonce: 1542
			},
			{
				id: "a446aa06a4f3986c3b042d88c066d798d76a40af9478826f22762e5f91122270",
				blockId: "6454cebac39ba3785df2f58491ca4984451772a2cf26384ce7e7a8acf657b5da",
				version: 2,
				type: 0,
				typeGroup: 1,
				amount: "1054332400000",
				fee: "1000000",
				sender: "AVyqDoLngpCnmqDtEicmYcNbezAKPLhRjv",
				senderPublicKey: "03f46c15d483e099b8c1ad277aa0341fd24e4052a835f848d72ca8632d1f16cf60",
				recipient: "AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW",
				signature: "25f61c80fada6c1eeed6c437aa09cafddeaa92dbc0465a5bc4274b63bc282b5ffb91c1ba7e55542fb3677d772a4eb684c55e9b74cfe419fee4d16f4e56ad4e84",
				confirmations: 17618,
				timestamp: "10.04.2021",
				nonce: 1541
			}
		];
		const {getAllByTestId, container} = render(<TransactionTable
			transactions={transactions} isLoadingTransactions={false}
			wallet={{
				address: 'AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW',
				balance: '0'
			}}/>);

		expect(getAllByTestId("TableRow")).toHaveLength(4);
		expect(container).toMatchSnapshot();
	});

});
