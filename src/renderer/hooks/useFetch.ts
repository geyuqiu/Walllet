import { useEffect, useState } from "react";

import { httpClient } from "../services/HttpClient";

const baseUrl = "https://dwallets.ark.io/api";

export const useFetch = () => {
	const [wallets, setWallets] = useState([]);
	useEffect(() => {
		const fetchWallets = async () => {
			setWallets(
				await httpClient.get(baseUrl + "/wallets?page=1&limit=5")
			);
		};
		fetchWallets();
	}, []);

	return { wallets };
};
