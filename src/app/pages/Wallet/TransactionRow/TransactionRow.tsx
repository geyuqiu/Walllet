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

export const hideTextMiddle = (id: string, prefixLength: number, suffixLength: number) =>
	`${id.substring(0, prefixLength)}...${id.substring(id.length - suffixLength, id.length)}`

export const TransactionRow = ({transaction, address}: TransactionRowProps) => {
	const linkClassName = "text-green-dark hover:text-green-darkest active:text-green-light font-semibold hover:underline";
	return (
		<TableRow className="text-base">

			<TableCell innerClassName="justify-end md:justify-start"
			           className="md:pt-3 md:pb-3">
				<Link href={'https://explorer.ark.io/transaction/' + transaction.id}
				      className={linkClassName}>
					<span className="table-cell lg:table-cell md:hidden">{hideTextMiddle(transaction.id, 5, 5)}</span>
					<Icon name="Txid" width={20} height={20} className="hidden lg:hidden md:table-cell"/>
				</Link>
			</TableCell>

			<TableCell innerClassName="justify-end md:justify-start md:border-l border-theme-secondary-300 pl-5 pr-5">
				{address === transaction.sender
					? <Link href={'https://explorer.ark.io/wallets/' + transaction.sender} className={linkClassName}>
						<ResponsiveText text={transaction.sender} prefixLength={5} suffixLength={5}/>
					</Link>
					: <ResponsiveText text={transaction.sender} prefixLength={5} suffixLength={6}/>
				}
			</TableCell>

			<TableCell innerClassName="justify-end md:justify-start md:border-l border-theme-secondary-300">
				{address === transaction.recipient
					? <Link href={'https://explorer.ark.io/wallets/' + transaction.recipient} className={linkClassName}>
						<ResponsiveText text={transaction.recipient} prefixLength={5} suffixLength={5}/>
					</Link>
					: <ResponsiveText text={transaction.recipient} prefixLength={5} suffixLength={6}/>
				}
			</TableCell>

			<TableCell innerClassName="justify-end md:justify-center md:border-l border-theme-secondary-300"
			           className="hidden xl:table-cell">
				{transaction.timestamp}
			</TableCell>

			<TableCell innerClassName="justify-end md:border-l border-theme-secondary-300">
				<span>{`${dollarToBtn(transaction.amount, 8)} ${currency}`}</span>
				{/*<span className="hidden lg:hidden md:table-cell">{`${dollarToBtn(transaction.amount, 2)} ${currency}`}</span>*/}
			</TableCell>

			<TableCell innerClassName="justify-end md:border-l border-theme-secondary-300"
			           className="hidden lg:table-cell">
				{`${dollarToBtn(transaction.fee, 8)} ${currency}`}
			</TableCell>

		</TableRow>
	);
}

type ResponsiveTextProps = {
	text: string;
	prefixLength: number;
	suffixLength: number;
};

export const ResponsiveText = ({text, prefixLength, suffixLength}: ResponsiveTextProps) =>
	<>
		<span className="hidden sm:block md:hidden">{text}</span>
		<span className="block sm:hidden md:block">{hideTextMiddle(text, prefixLength, suffixLength)}</span>
	</>
