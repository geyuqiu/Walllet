import moment from "moment";
import {useEffect, useState} from "react";

import {Transaction} from '../components/TransactionRow/model';
import {Wallet} from '../components/Wallet/model';
import {httpClient} from "../services/HttpClient";

const walletBaseUrl = 'https://dwallets.ark.io/api/wallets/';
const dateFormat = 'DD.MM.YYYY';

export const useFetch = (wallet: Wallet | null) => {
	const [wallets, setWallets] = useState<string[]>([]);
	useEffect(() => {
		const fetchWallets = async () => {
			const response = await httpClient.get(walletBaseUrl + "top?page=1&limit=5");
			parseWallets(response);
		};
		fetchWallets();
	}, [wallet]);

	const parseWallets = (response: any) => {
		console.log('top wallets: ', response);
		const result: any[] = [];
		response?.data.forEach((data: any) => {
			result.push({
				address: data.address,
				balance: data.balance
			});
		});
		setWallets(result);
	};

	const [transactions, setTransactions] = useState<Transaction[]>([]);
	useEffect(() => {
		const fetchTransaction = async () => {
			const response = await httpClient.get(`${walletBaseUrl}${wallet!.address}/transactions?page=1&limit=10`);
			parseTransaction(response);
		};
		if (wallet) fetchTransaction();
	}, []);

	const parseTransaction = (response: any) => {
		console.log('transactions: ', response);
		response?.data.forEach((data: any) => {
			data.id = trimLongText(data.id);
			data.sender = trimLongText(data.sender);
			data.recipient = trimLongText(data.recipient);
			data.timestamp = moment(data.timestamp.human).format(dateFormat);
		});
		setTransactions(response.data);
	};

	const trimLongText = (id: string) => `${id.substring(0, 5)}...${id.substring(id.length - 5, id.length)}`

	return { wallets, transactions };
};
