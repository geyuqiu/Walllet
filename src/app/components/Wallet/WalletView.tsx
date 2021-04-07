import React, {useState} from "react";

import {useFetch} from '../../hooks/useFetch';
import {Table} from '../Table/Table';
import {tableColumns} from '../Table/TableColumns';
import {Transaction} from '../TransactionRow/model';
import {TransactionRow} from '../TransactionRow/TransactionRow';
import {Wallet} from './model';

export const WalletView = () => {
	const [wallet, setWallet] = useState<Wallet | null >({
		address: 'AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW',
		balance: '0'
	});
	const {wallets, transactions} = useFetch(wallet);

	return (
		<section className="m-3 sm:m-12">
			{wallets.length
				? <div>{wallet!.address} {wallet!.balance}</div>
				: <div/>
			}
			{transactions.length
				? <Table columns={tableColumns} data={transactions}>
						{(transaction: Transaction, index: number) => (
							<TransactionRow transaction={transaction} address={wallet!.address}/>
						)}
				</Table>
				: <p>No transactions were found for this wallet!</p>
			}
		</section>
	);
};
