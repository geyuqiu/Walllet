import React from "react";

import {useFetch} from '../../hooks/useFetch';

export const Wallet = () => {
	const {wallets} = useFetch();

	return <div>{JSON.stringify(wallets)}</div>;
};
