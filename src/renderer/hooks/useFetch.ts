import {useEffect, useState} from "react";

import {httpClient} from "../services/HttpClient";

const baseUrl = "https://dwallets.ark.io/api";

export const useFetch = () => {
	const [addresses, setAddresses] = useState<string[]>([]);
	useEffect(() => {
		const fetchWallets = async () => {
			const wallets = await httpClient.get(baseUrl + "/wallets?page=1&limit=5");
			const result: string[] = [];
			wallets?.data.forEach((data: any) => {
				result.push(data.address);
			});
			setAddresses(result);
		};
		fetchWallets();
	}, []);

	return { addresses };
};
