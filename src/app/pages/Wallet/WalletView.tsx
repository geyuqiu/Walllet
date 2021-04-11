import React, {useState} from "react";

import {Table} from '../../components/Table/Table';
import {useFetchTransactions, useFetchWallets} from '../../hooks/useFetchWallets';
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
	const [isLoadingWallets, setIsLoadingWallets] = useState(true);
	const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

	const [wallet, setWallet] = useState<Wallet | null>(null);
	const {wallets} = useFetchWallets(setIsLoadingWallets, setWallet);
	const {transactions} = useFetchTransactions(wallet, setIsLoadingTransactions);

	const addressOnSelect = (address: string) => {
		setIsLoadingTransactions(true);
		const next = wallets.find(w => w.address ===  address)!;
		setIsLoadingTransactions(false);
		setWallet(next);
	}

	return (
		<>
			<WalletCard wallets={wallets} wallet={wallet} addressOnSelect={addressOnSelect}/>
			<section className="ml-6 mr-3 sm:mx-8 sm:flex sm:justify-center pt-12">
				{(isLoadingTransactions || !wallet) && <p>Loading Transactions ...</p>}
				{!isLoadingTransactions && !transactions.length && <p>No transactions were found for this wallet!</p>}
				{!isLoadingTransactions && transactions?.length > 0 && wallet &&
					<Table columns={tableColumns} data={transactions} hideColumnsAtBreakpoint={hideColumnsAtBreakpoint}>
						{(transaction: Transaction) => (
							<TransactionRow transaction={transaction} address={wallet.address}/>
						)}
					</Table>
				}
			</section>
		</>
	);
};
