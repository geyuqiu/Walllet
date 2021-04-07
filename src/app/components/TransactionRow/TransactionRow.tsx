import React from "react";

import {TableCell} from '../Table/TableCell';
import {TableRow} from "../Table/TableRow";
import {Transaction} from './model';

type TransactionRowProps = {
	transaction: Transaction;
	address: string
};

export const TransactionRow = ({transaction, address}: TransactionRowProps) => {
	const trimLongText = (id: string) => `${id.substring(0, 5)}...${id.substring(id.length - 5, id.length)}`
	return (
		<TableRow>
			<TableCell innerClassName="justify-start flex flex-inline align-top justify-end flex-row-reverse" className="group relative text-sm text-left select-none text-theme-secondary-500 border-theme-secondary-300 m-0 p-3 first:pl-0 last:pr-0 font-semibold">
				<a href={'https://explorer.ark.io/transaction/' + transaction.id} className="text-green-dark">{trimLongText(transaction.id)}</a>
			</TableCell>
			<TableCell innerClassName="justify-start border-l border-theme-secondary-300">
				<a href={'https://explorer.ark.io/wallets/' + transaction.sender}
					 className={address === transaction.sender ? "text-green-dark" : ""}
				>{trimLongText(transaction.sender)}</a>
			</TableCell>
			<TableCell innerClassName="justify-start border-l border-theme-secondary-300">
				<a href={'https://explorer.ark.io/wallets/' + transaction.recipient}
				   className={address === transaction.recipient ? "text-green-dark" : ""}
				>{trimLongText(transaction.recipient)}</a>
			</TableCell>
			<TableCell innerClassName="justify-center border-l border-theme-secondary-300">
				{transaction.timestamp}
			</TableCell>
			<TableCell innerClassName="justify-end border-l border-theme-secondary-300">
				{transaction.amount}
			</TableCell>
			<TableCell innerClassName="justify-end border-l border-theme-secondary-300">
				{transaction.fee}
			</TableCell>
		</TableRow>
	);
}
