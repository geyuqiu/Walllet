import React, {useState} from "react";

import {useFetch, useFetchTransactions} from '../../hooks/useFetch';
import {Wallet} from './model';
import {TransactionTable} from './TransactionTable/TransactionTable';
import {WalletCard} from './WalletCard/WalletCard';

export interface HideColumnsResponsive {
	accessor: string;
	breakPoint: number;
}

export const WalletView = () => {
	const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

	const [wallet, setWallet] = useState<Wallet | null>(null);
	const {wallets} = useFetch(setWallet);
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
			<TransactionTable wallet={wallet} transactions={transactions} isLoadingTransactions={isLoadingTransactions}/>
		</>
	);
};
