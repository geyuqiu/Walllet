import React, {useState} from "react";

import {useFetch} from '../../hooks/useFetch';

export const Wallet = () => {
	const [addressSelected, setAddressSelected] = useState<string>('D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax');
	const {addresses, transactions} = useFetch(addressSelected);

	return (
		<>
			<p>{JSON.stringify(addresses)}</p>);
			<p>{JSON.stringify(transactions)}</p>);
		</>
	);
};
