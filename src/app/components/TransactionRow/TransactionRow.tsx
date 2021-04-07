import React from "react";

import { TableRow } from "../Table/TableRow";
import {Transaction} from './model';
import {TableCell} from '../Table/TableCell';

type TransactionRowProps = {
	transaction: Transaction;
};

export const TransactionRow = ({transaction}: TransactionRowProps) => (
	<TableRow>
		<TableCell>
			{transaction.id}
		</TableCell>
		<TableCell>
			{transaction.sender}
		</TableCell>
		<TableCell>
			{transaction.recipient}
		</TableCell>
		<TableCell>
			{transaction.timestamp}
		</TableCell>
		<TableCell>
			{transaction.amount}
		</TableCell>
		<TableCell>
			{transaction.fee}
		</TableCell>
	</TableRow>
);
