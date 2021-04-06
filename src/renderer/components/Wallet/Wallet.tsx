import React, {useEffect, useState} from "react";

import {httpClient} from "../../services/HttpClient";

export const Wallet = () => {
	const [wallets, setWallets] = useState([]);
	useEffect(() => {
		const fetchWallets = async () => {
			setWallets(await httpClient.get(
				"https://dwallets.ark.io/api/wallets?page=1&limit=5"
			));
		};
		fetchWallets();
	}, []);

	return <div>{JSON.stringify(wallets)}</div>;
};
