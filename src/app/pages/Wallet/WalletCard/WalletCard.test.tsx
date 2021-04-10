import {render} from "@testing-library/react";
import React from "react";

import {WalletCard} from "./WalletCard";

describe("WalletCard", () => {
	it("should match snapshot", () => {
		const wallets = [
			{
				address: "D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
				balance: "8498932552758785"
			},
			{
				address: "DEyaFhDuaoQyKbFH4gJtYZvKkB6umyrEUj",
				balance: "2000044816999638"
			},
		];

		const { container } = render(<WalletCard  wallet={{
			address: 'AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW',
			balance: '0'
		}} wallets={wallets}/>);

		expect(container).toMatchSnapshot();
	});

	it("wallet is null", () => {
		const {container} = render(<WalletCard wallet={null} wallets={[]}/>);

		expect(container).toMatchSnapshot();
	});
});
