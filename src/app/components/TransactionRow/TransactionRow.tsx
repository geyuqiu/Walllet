import React from "react";

import {TableCell} from '../Table/TableCell';
import {TableRow} from "../Table/TableRow";
import {Transaction} from './model';

type TransactionRowProps = {
	transaction: Transaction;
};

export const TransactionRow = ({transaction}: TransactionRowProps) => (
	<TableRow>
		<TableCell innerClassName="justify-start flex flex-inline align-top justify-end flex-row-reverse" className="group relative text-sm text-left select-none text-theme-secondary-500 border-theme-secondary-300 m-0 p-3 first:pl-0 last:pr-0 font-semibold">
			{transaction.id}
		</TableCell>
		<TableCell innerClassName="justify-start border-l border-theme-secondary-300">
			{transaction.sender}
		</TableCell>
		<TableCell innerClassName="justify-start border-l border-theme-secondary-300">
			{transaction.recipient}
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
