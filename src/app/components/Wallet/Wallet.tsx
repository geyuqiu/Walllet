import React, {useState} from "react";

import {useFetch} from '../../hooks/useFetch';
import {Table} from './Table/Table';
import {tableColumns} from './Table/TableColumns';

export const Wallet = () => {
	const [addressSelected, setAddressSelected] = useState<string>('D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax');
	const {addresses, transactions} = useFetch(addressSelected);

	return (
		<>
			{transactions.length
				? <Table columns={tableColumns} transactions={transactions}/>
				: <div/>
			}
		</>
	);
};
