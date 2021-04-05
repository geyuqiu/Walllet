import React, { useEffect } from "react";

import { httpClient } from "../../services/HttpClient";

export const Wallet = () => {
	useEffect(() => {
		const fetchWallets = async () => {
			const wallets = await httpClient.get(
				"https://dwallets.ark.io/api/wallets?page=1&limit=15"
			);
			// console.info(wallets);
		};
		fetchWallets();
	}, []);

	return <div>Wallet</div>;
};
