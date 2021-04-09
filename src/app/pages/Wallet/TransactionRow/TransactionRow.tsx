import React from "react";

import {Icon} from '../../../components/Icon';
import {TableCell} from '../../../components/Table/TableCell';
import {TableRow} from "../../../components/Table/TableRow";
import {Transaction} from './model';

type TransactionRowProps = {
	transaction: Transaction;
	address: string
};

export const TransactionRow = ({transaction, address}: TransactionRowProps) => {
	const trimLongText = (id: string) => `${id.substring(0, 5)}...${id.substring(id.length - 5, id.length)}`
	return (
		<TableRow className="text-base">

			<TableCell innerClassName="justify-end sm:justify-start"
			           className="sm:pt-3 sm:pb-3">
				<a href={'https://explorer.ark.io/transaction/' + transaction.id}
				   className="text-green-dark hover:text-green-darkest active:text-green-light font-semibold hover:underline">
					<span className="table-cell lg:table-cell sm:hidden">{trimLongText(transaction.id)}</span>
					<Icon name="Txid" width={20} height={20} className="hidden lg:hidden sm:table-cell"/>
				</a>
			</TableCell>

			<TableCell innerClassName="justify-end sm:justify-start sm:border-l border-theme-secondary-300 pl-5 pr-5">
				<a href={'https://explorer.ark.io/wallets/' + transaction.sender}
					 className={address === transaction.sender ? "text-green-dark hover:text-green-darkest  active:text-green-light font-semibold hover:underline" : ""}
				>{trimLongText(transaction.sender)}</a>
			</TableCell>

			<TableCell innerClassName="justify-end sm:justify-start sm:border-l border-theme-secondary-300">
				<a href={'https://explorer.ark.io/wallets/' + transaction.recipient}
				   className={address === transaction.recipient ? "text-green-dark hover:text-green-darkest active:text-green-light font-semibold hover:underline" : ""}
				>{trimLongText(transaction.recipient)}</a>
			</TableCell>

			<TableCell innerClassName="justify-end sm:justify-center sm:border-l border-theme-secondary-300"
			           className="hidden xl:table-cell"
			>
				{transaction.timestamp}
			</TableCell>´

			<TableCell innerClassName="justify-end sm:border-l border-theme-secondary-300">
				{transaction.amount}
			</TableCell>

			<TableCell innerClassName="justify-end sm:border-l border-theme-secondary-300"
			           className="hidden lg:table-cell">
				{transaction.fee}
			</TableCell>

		</TableRow>
	);
}
