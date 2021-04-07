import React from "react";

import {TableCell} from '../Table/TableCell';
import {TableRow} from "../Table/TableRow";
import {Transaction} from './model';

type TransactionRowProps = {
	transaction: Transaction;
};

export const TransactionRow = ({transaction}: TransactionRowProps) => (
	<TableRow>
		<TableCell innerClassName="justify-center">
			{transaction.id}
		</TableCell>
		<TableCell innerClassName="justify-center">
			{transaction.sender}
		</TableCell>
		<TableCell innerClassName="justify-center">
			{transaction.recipient}
		</TableCell>
		<TableCell innerClassName="justify-center">
			{transaction.timestamp}
		</TableCell>
		<TableCell innerClassName="justify-end">
			{transaction.amount}
		</TableCell>
		<TableCell innerClassName="justify-end">
			{transaction.fee}
		</TableCell>
	</TableRow>
);
