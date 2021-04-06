import React from "react";

import {useFetch} from '../../hooks/useFetch';

export const Wallet = () => {
	const {addresses} = useFetch();

	return <div>{JSON.stringify(addresses)}</div>;
};
