import moment from "moment";
import {useEffect, useState} from "react";

import {Transaction} from '../pages/Wallet/TransactionRow/model';
import {Wallet} from '../pages/Wallet/model';
import {httpClient} from "../services/HttpClient";

const walletBaseUrl = 'https://api.ark.io/api/wallets/';
const dateFormat = 'DD.MM.YYYY';
const currency = 'DARK';

export const useFetch = (wallet: Wallet | null, setIsLoadingTransactions: Function) => {
	const [wallets, setWallets] = useState<string[]>([]);
	useEffect(() => {
		const fetchWallets = async () => {
			setIsLoadingTransactions(true);
			const response = await httpClient.get(walletBaseUrl + "top?page=1&limit=5");
			setWallets(parseWallets(response));
			setIsLoadingTransactions(false);
		};
		fetchWallets();
	}, [wallet]);

	const [transactions, setTransactions] = useState<Transaction[]>([]);
	useEffect(() => {
		const fetchTransaction = async () => {
			const response = await httpClient.get(`${walletBaseUrl}${wallet!.address}/transactions?page=1&limit=11`);
			setTransactions(parseTransaction(response));
		};
		if (wallet) fetchTransaction();
	}, []);

	return { wallets, transactions };
};

export const parseWallets = (response: any) => {
	// console.log('top wallets: ', response);
	const result: any[] = [];
	response?.data.forEach((data: any) => {
		result.push({
			address: data.address,
			balance: data.balance
		});
	});
	return result;
};

export const dollarToBtn = (amount: string, roundTo: number) => (Number(amount) * 0.000018).toFixed(roundTo);

export const parseTransaction = (response: any) => {
	// console.log('transactions: ', response);
	response?.data.forEach((data: any) => {
		data.timestamp = moment(data.timestamp.human).format(dateFormat);
		data.amount = `${dollarToBtn(data.amount, 2)} ${currency}`;
		data.fee = `${dollarToBtn(data.fee, 2)} ${currency}`;
	});
	return response.data;
};
