import React from "react";

import {Icon} from '../Icon';
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
			<TableCell innerClassName="justify-start"
			           className="sm:text-sm sm:p-3 sm:first:pl-0 sm:last:pr-0">
				<a href={'https://explorer.ark.io/transaction/' + transaction.id}
				   className="text-green-dark">
					<span className="table-cell lg:table-cell sm:hidden">{trimLongText(transaction.id)}</span>
					<Icon name="Txid" width={20} height={20} className="hidden lg:hidden sm:table-cell"/>
				</a>
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
			<TableCell innerClassName="justify-center border-l border-theme-secondary-300"
			           className="hidden xl:table-cell"
			>
				{transaction.timestamp}
			</TableCell>
			<TableCell innerClassName="justify-end border-l border-theme-secondary-300">
				{transaction.amount}
			</TableCell>
			<TableCell innerClassName="justify-end border-l border-theme-secondary-300"
			           className="hidden lg:table-cell"
			>
				{transaction.fee}
			</TableCell>
		</TableRow>
	);
}
