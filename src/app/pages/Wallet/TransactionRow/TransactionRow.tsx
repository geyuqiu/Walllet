import {Icon} from "app/components/Icon/Icon";
import React from "react";

import {Link} from '../../../components/Link/Link';
import {TableCell} from '../../../components/Table/TableCell';
import {TableRow} from "../../../components/Table/TableRow";
import {Transaction} from './model';

const currency = 'DARK';
export const dollarToBtn = (amount: string, roundTo: number) => (Number(amount) * 0.000018).toFixed(roundTo);

type TransactionRowProps = {
	transaction: Transaction;
	address: string
};

export const TransactionRow = ({transaction, address}: TransactionRowProps) => {
	const trimLongText = (id: string) => `${id.substring(0, 5)}...${id.substring(id.length - 5, id.length)}`
	const linkClassName = "text-green-dark hover:text-green-darkest active:text-green-light font-semibold hover:underline";
	return (
		<TableRow className="text-base">

			<TableCell innerClassName="justify-end sm:justify-start"
			           className="sm:pt-3 sm:pb-3">
				<Link href={'https://explorer.ark.io/transaction/' + transaction.id}
				      className={linkClassName}>
					<span className="table-cell lg:table-cell sm:hidden">{trimLongText(transaction.id)}</span>
					<Icon name="Txid" width={20} height={20} className="hidden lg:hidden sm:table-cell"/>
				</Link>
			</TableCell>

			<TableCell innerClassName="justify-end sm:justify-start sm:border-l border-theme-secondary-300 pl-5 pr-5">
				{address === transaction.sender
					? <Link href={'https://explorer.ark.io/wallets/' + transaction.sender} className={linkClassName}>
						{trimLongText(transaction.sender)}
					</Link>
					: trimLongText(transaction.sender)
				}
			</TableCell>

			<TableCell innerClassName="justify-end sm:justify-start sm:border-l border-theme-secondary-300">
				{address === transaction.recipient
					? <Link href={'https://explorer.ark.io/wallets/' + transaction.recipient} className={linkClassName}>
						{trimLongText(transaction.recipient)}
					</Link>
					: trimLongText(transaction.recipient)
				}
			</TableCell>

			<TableCell innerClassName="justify-end sm:justify-center sm:border-l border-theme-secondary-300"
			           className="hidden xl:table-cell">
				{transaction.timestamp}
			</TableCell>

			<TableCell innerClassName="justify-end sm:border-l border-theme-secondary-300">
				<span className="sm:hidden lg:table-cell">{`${dollarToBtn(transaction.amount, 8)} ${currency}`}</span>
				<span className="hidden lg:hidden sm:table-cell">{`${dollarToBtn(transaction.amount, 2)} ${currency}`}</span>
			</TableCell>

			<TableCell innerClassName="justify-end sm:border-l border-theme-secondary-300"
			           className="hidden lg:table-cell">
				{`${dollarToBtn(transaction.fee, 8)} ${currency}`}
			</TableCell>

		</TableRow>
	);
}
