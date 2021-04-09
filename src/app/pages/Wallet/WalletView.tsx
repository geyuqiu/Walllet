import React, {useState} from "react";

import {useFetch} from '../../hooks/useFetch';
import {Table} from '../../components/Table/Table';
import {tableColumns} from '../../components/Table/TableColumns';
import {Transaction} from './TransactionRow/model';
import {TransactionRow} from './TransactionRow/TransactionRow';
import {Wallet} from './model';

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
				<Table columns={tableColumns} data={transactions}>
					{(transaction: Transaction, index: number) => (
						<TransactionRow transaction={transaction} address={wallet!.address}/>
					)}
				</Table>
			}
		</section>
	);
};
