import React from "react";

import {Table} from '../../../components/Table/Table';
import {Wallet} from '../model';
import {Transaction} from '../TransactionRow/model';
import {feeAccessor, tableColumns, timestampAccessor} from '../TransactionRow/TableColumns';
import {TransactionRow} from '../TransactionRow/TransactionRow';

export interface HideColumnsResponsive {
	accessor: string;
	breakPoint: number;
}

const hideColumnsAtBreakpoint: HideColumnsResponsive[] = [
	{accessor: timestampAccessor, breakPoint: 1280},
	{accessor: feeAccessor, breakPoint: 1024}
];

type AddressDropdownProps = {
	wallet: Wallet | null;
	transactions: Transaction[];
	isLoadingTransactions: boolean;
}

export const TransactionTable = ({wallet, transactions, isLoadingTransactions}: AddressDropdownProps) => (
	<div className="ml-6 mr-3 sm:mx-8 sm:flex sm:justify-center pt-12">
		{(isLoadingTransactions || !wallet) && <p data-testid="TransactionTable__Loading">Loading Transactions ...</p>}
		{!isLoadingTransactions && !transactions?.length && wallet && <p data-testid="TransactionTable__No_Transactions">No transactions were found for this wallet!</p>}
		{!isLoadingTransactions && transactions?.length > 0 && wallet &&
		<Table columns={tableColumns} data={transactions} hideColumnsAtBreakpoint={hideColumnsAtBreakpoint}>
			{(transaction: Transaction) => (
				<TransactionRow transaction={transaction} address={wallet.address}/>
			)}
		</Table>
		}
	</div>
);
