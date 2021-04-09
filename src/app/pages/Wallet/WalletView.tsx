import React, {useState} from "react";

import {Table} from '../../components/Table/Table';
import {feeAccessor, tableColumns, timestampAccessor} from '../../components/Table/TableColumns';
import {useFetch} from '../../hooks/useFetch';
import {Wallet} from './model';
import {Transaction} from './TransactionRow/model';
import {TransactionRow} from './TransactionRow/TransactionRow';

export interface HideColumnsResponsive {
	accessor: string;
	breakPoint: number;
}

const hideColumnsAtBreakpoint: HideColumnsResponsive[] = [
	{accessor: timestampAccessor, breakPoint: 1280},
	{accessor: feeAccessor, breakPoint: 1024}
];

export const WalletView = () => {
	const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);
	const [wallet, setWallet] = useState<Wallet | null >({
		address: 'AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW',
		balance: '0'
	});
	const {wallets, transactions} = useFetch(wallet, setIsLoadingTransactions);

	return (
		<section className="mx-3 sm:mx-12">
			{wallets.length
				? <div>{wallet!.address} {wallet!.balance}</div>
				: <div/>
			}
			{isLoadingTransactions && <p>Loading!</p>}
			{!isLoadingTransactions && !transactions.length && <p>No transactions were found for this wallet!</p>}
			{!isLoadingTransactions && transactions.length &&
				<Table columns={tableColumns} data={transactions} hideColumnsAtBreakpoint={hideColumnsAtBreakpoint}>
					{(transaction: Transaction, index: number) => (
						<TransactionRow transaction={transaction} address={wallet!.address}/>
					)}
				</Table>
			}
		</section>
	);
};
