import React, {useState} from "react";

import {Table} from '../../components/Table/Table';
import {useFetch} from '../../hooks/useFetch';
import {Wallet} from './model';
import {Transaction} from './TransactionRow/model';
import {feeAccessor, tableColumns, timestampAccessor} from './TransactionRow/TableColumns';
import {TransactionRow} from './TransactionRow/TransactionRow';
import {WalletCard} from './WalletCard/WalletCard';

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
	const [wallet, setWallet] = useState<Wallet | null>({
		address: 'AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW',
		balance: '1004310900000'
	});
	const {wallets, transactions} = useFetch(wallet, setIsLoadingTransactions);

	const addressOnSelect = (address: string) => {
		const next = wallets.find(w => w.address ===  address)!;
		setWallet(next);
	}

	return (
		<>
			<WalletCard wallets={wallets} wallet={wallet} addressOnSelect={addressOnSelect}/>
			<section className="ml-6 mr-3 sm:mx-8 sm:flex sm:justify-center pt-12">
				{isLoadingTransactions && <p>Loading!</p>}
				{!isLoadingTransactions && !transactions.length && <p>No transactions were found for this wallet!</p>}
				{!isLoadingTransactions && transactions?.length > 0 &&
					<Table columns={tableColumns} data={transactions} hideColumnsAtBreakpoint={hideColumnsAtBreakpoint}>
						{(transaction: Transaction, index: number) => (
							<TransactionRow transaction={transaction} address={wallet!.address}/>
						)}
					</Table>
				}
			</section>
		</>
	);
};
