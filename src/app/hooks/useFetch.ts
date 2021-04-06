import {useEffect, useState} from "react";

import {httpClient} from "../services/HttpClient";

const walletBaseUrl = 'https://dwallets.ark.io/api/wallets/';

export const useFetch = (address: string) => {
	const [addresses, setAddresses] = useState<string[]>([]);
	useEffect(() => {
		const fetchWallets = async () => {
			const response = await httpClient.get(walletBaseUrl + "top?page=1&limit=5");
			const result: string[] = [];
			response?.data.forEach((data: any) => {
				result.push(data.address);
			});
			setAddresses(result);
		};
		fetchWallets();
	}, [address]);

	const [transactions, setTransactions] = useState<any[]>([]);
	useEffect(() => {
		const fetchTransaction = async () => {
			const response = await httpClient.get(`${walletBaseUrl}${address}/transactions?page=1&limit=15`);
			response?.data.forEach((data: any) => {
				data.timestamp = data.timestamp.human;
			});
			setTransactions(response.data);
		};
		fetchTransaction();
	}, []);

	return { addresses, transactions };
};
