import React, {useState} from "react";

import {useFetch} from '../../hooks/useFetch';
import {Table} from '../Table/Table';
import {tableColumns} from '../Table/TableColumns';
import {Transaction} from '../TransactionRow/model';
import {TransactionRow} from '../TransactionRow/TransactionRow';
import {Wallet} from './model';

export const WalletView = () => {
	const [wallet, setWallet] = useState<Wallet | null >({
		address: 'D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax',
		balance: '0'
	});
	const {wallets, transactions} = useFetch(wallet);

	return (
		<>
			{wallets.length
				? <div>{wallet!.address} {wallet!.balance}</div>
				: <div/>
			}
			{transactions.length
				? <Table columns={tableColumns} data={transactions}>
						{(transaction: Transaction, index: number) => (
							<TransactionRow transaction={transaction}/>
						)}
				</Table>
				: <div/>
			}
		</>
	);
};