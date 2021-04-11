import {act, fireEvent, render, waitFor} from "@testing-library/react";
import React from "react";

import {Wallet} from '../model';
import {buildLabelAndValue, WalletCard} from "./WalletCard";

describe("WalletCard", () => {
	const wallets: Wallet[] = [
		{address: 'address1', balance: 'balance1'},
		{address: 'address2', balance: 'balance2'},
		{address: 'address3', balance: 'balance3'},
		{address: 'address4', balance: 'balance4'},
		{address: 'address5', balance: 'balance5'},
	];

	const wallet = wallets[0];
	it("should match snapshot", () => {
		const CryptoWallets = [
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
		}} wallets={CryptoWallets}/>);

		expect(container).toMatchSnapshot();
	});

	it("wallet is null", () => {
		const {container} = render(<WalletCard wallet={null} wallets={[]}/>);

		expect(container).toMatchSnapshot();
	});

	it("buildLabelAndValue", () => {
		expect(buildLabelAndValue(wallets)).toEqual([
			{label: 'address1', value: 'address1'},
			{label: 'address2', value: 'address2'},
			{label: 'address3', value: 'address3'},
			{label: 'address4', value: 'address4'},
			{label: 'address5', value: 'address5'},
		]);
	});


	it("should open dropdown list with all addresses", async () => {
		const {container, getByRole, getByTestId} = render(
			<WalletCard wallets={wallets} wallet={wallet}/>,
		);
		expect(getByRole("button")).toBeInTheDocument();
		act(() => {
			fireEvent.click(getByRole("button"));
		});

		await waitFor(() => expect(getByTestId("dropdown__option--0")).toBeInTheDocument());
		expect(container).toMatchSnapshot();
	});

	it("should emit onChange", async () => {
		const addressOnSelect = jest.fn();

		const {getByRole, getByTestId} = render(
			<WalletCard wallets={wallets} wallet={wallet} addressOnSelect={addressOnSelect}/>,
		);
		expect(getByRole("button")).toBeInTheDocument();

		act(() => {
			fireEvent.click(getByRole("button"));
		});

		await waitFor(() => expect(getByTestId("dropdown__option--1")).toBeInTheDocument());

		act(() => {
			fireEvent.click(getByTestId("dropdown__option--1"));
		});

		expect(addressOnSelect).toHaveBeenCalled();
	});
});
