import {BigNumber} from '@arkecosystem/platform-sdk-support';
import {Icon} from "app/components/Icon/Icon";
import React from "react";

import {Amount} from '../../../components/Amount/Amount';
import {Link} from '../../../components/Link/Link';
import {TableCell} from '../../../components/Table/TableCell';
import {TableRow} from "../../../components/Table/TableRow";
import {Transaction} from './model';


type TransactionRowProps = {
	transaction: Transaction;
	address: string;
};

export const hideTextBetween = ({id, prefixLength, suffixLength}: { id?: string, prefixLength: number, suffixLength: number }) =>
	id ? `${id.substring(0, prefixLength)}...${id.substring(id.length - suffixLength, id.length)}` : '';

export const TransactionRow = ({transaction, address}: TransactionRowProps) => {
	const linkClassName = "text-green-dark hover:text-green-darkest active:text-green-light font-semibold hover:underline";
	return (
		<TableRow className="text-base">

			<TableCell innerClassName="justify-end md:justify-start"
			           className="md:py-2 md:w-4">
				<Link href={'https://explorer.ark.io/transaction/' + transaction.id}
				      className={linkClassName}>
					<span className="table-cell lg:table-cell md:hidden">{hideTextBetween({
						id: transaction.id,
						prefixLength: 5,
						suffixLength: 5
					})}</span>
					<Icon name="Txid" width={20} height={20} className="hidden lg:hidden md:table-cell"/>
				</Link>
			</TableCell>

			<TableCell innerClassName="justify-end md:justify-start md:border-l border-theme-secondary-300">
				{address !== transaction.sender
					? <Link href={'https://explorer.ark.io/wallets/' + transaction.sender} className={linkClassName}>
						<ResponsiveText text={transaction.sender} prefixLength={5} suffixLength={5}/>
					</Link>
					: <ResponsiveText text={transaction.sender} prefixLength={5} suffixLength={6}/>
				}
			</TableCell>

			<TableCell innerClassName="justify-end md:justify-start md:border-l border-theme-secondary-300">
				{address !== transaction.recipient
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
				<Amount
					data-testid="transaction__fee__Amount"
					value={BigNumber.make(transaction.amount)}
				/>
			</TableCell>

			<TableCell innerClassName="justify-end md:border-l border-theme-secondary-300"
			           className="hidden lg:table-cell">
				<Amount
					data-testid="transaction__fee__Amount"
					value={BigNumber.make(transaction.fee)}
				/>
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
		<span className="block sm:hidden md:block">{hideTextBetween({
			id: text,
			prefixLength: prefixLength,
			suffixLength: suffixLength
		})}</span>
	</>
