import React, {useState} from "react";

import {useFetch} from '../../hooks/useFetch';
import {Table} from '../Table/Table';
import {tableColumns} from '../Table/TableColumns';
import {Transaction} from '../TransactionRow/model';
import {TransactionRow} from '../TransactionRow/TransactionRow';

export const Wallet = () => {
	const [addressSelected, setAddressSelected] = useState<string>('D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax');
	const {addresses, transactions} = useFetch(addressSelected);

	return (
		<>
			{transactions.length
				? <Table columns={tableColumns} data={transactions}>
						{(transaction: Transaction, index: number) => (
							<TransactionRow transaction={transaction}/>
						)}
				</Table>
				: <div/>
			}
		</>
	);
};
