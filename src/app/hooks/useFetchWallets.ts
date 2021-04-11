import moment from "moment";
import {useEffect, useState} from "react";

import {Wallet} from '../pages/Wallet/model';
import {Transaction} from '../pages/Wallet/TransactionRow/model';
import {httpClient} from "../services/HttpClient";

const walletBaseUrl = 'https://api.ark.io/api/wallets/';
const dateFormat = 'DD.MM.YYYY';

export const useFetchWallets = (setIsLoadingTransactions: Function, setWallet: Function) => {
	const [wallets, setWallets] = useState<Wallet[]>([]);
	useEffect(() => {
		const fetchWallets = async () => {
			setIsLoadingTransactions(false);
			const response = await httpClient.get(walletBaseUrl + "top?page=1&limit=5");
			const wallets = parseWallets(response);
			if (wallets.length) {
				setWallets(wallets);
				setWallet(wallets[0]);
			}
			setIsLoadingTransactions(true);
		};
		fetchWallets();
	}, []);

	return {wallets};
};

export const useFetchTransactions = (wallet: Wallet | null, setIsLoadingTransactions: Function) => {

	const [transactions, setTransactions] = useState<Transaction[]>([]);
	useEffect(() => {
		const fetchTransaction = async () => {
			setIsLoadingTransactions(true);
			const response = await httpClient.get(`${walletBaseUrl}${wallet!.address}/transactions?page=1&limit=15`);
			const transactions = parseTransaction(response);
			if (transactions) {
				setTransactions(transactions);
			}
			setIsLoadingTransactions(false);
		};
		if (wallet) fetchTransaction();
	}, [wallet]);

	return {transactions};
};

export const parseWallets = (response: any): Wallet[] => {
	// console.log('top wallets: ', response);
	const result: any[] = [];
	if (response && response.data) {
		response?.data?.forEach((data: any) => {
			result.push({
				address: data.address,
				balance: data.balance
			});
		});
		return result;
	} else {
		return [];
	}
};

export const parseTransaction = (response: any): Transaction[] => {
	// console.log('transactions: ', response);
	if (response && response.data) {
		response?.data?.forEach((data: any) => {
			data.timestamp = moment(data.timestamp.human).format(dateFormat);
		});
		return response.data;
	} else {
		return [];
	}
};
