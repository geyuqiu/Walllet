import { Dropdown } from "app/components/Dropdown";
import React, {useState} from "react";

import {Button} from '../../components/Button';
import {Icon} from '../../components/Icon/Icon';
import {Table} from '../../components/Table/Table';
import {feeAccessor, tableColumns, timestampAccessor} from '../../components/Table/TableColumns';
import {useFetch} from '../../hooks/useFetch';
import {Wallet} from './model';
import {Transaction} from './TransactionRow/model';
import {TransactionRow} from './TransactionRow/TransactionRow';
import {Divider} from '../../components/Divider';

export interface HideColumnsResponsive {
	accessor: string;
	breakPoint: number;
}

const hideColumnsAtBreakpoint: HideColumnsResponsive[] = [
	{accessor: timestampAccessor, breakPoint: 1280},
	{accessor: feeAccessor, breakPoint: 1024}
];

export const WalletView = () => {
	const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);
	const [wallet, setWallet] = useState<Wallet | null >({
		address: 'AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW',
		balance: '0'
	});
	const {wallets, transactions} = useFetch(wallet, setIsLoadingTransactions);
	const walletDisplayOptions = [
		{label: 'all', value: "all"},
		{label: 'favorites', value: "favorites"},
		{label: 'ledger', value: "ledger"},
	];

	return (
		<section className="mx-3 sm:mx-12 pt-12">
			<section className="mb-12 bg-green-dark">
				<section>ARK Wallet</section>
				<div className="mx-8 -my-2">
					<Divider className="border-theme-secondary-300 dark:border-theme-secondary-600"/>
				</div>
				<Dropdown
					toggleContent={
						<div className="relative">
							<Button size="icon" className="text-left" icon="Address">
								{wallet!.address}
								<Icon name="ChevronDown" width={20} height={20}/>
							</Button>
						</div>
					}
					options={walletDisplayOptions}
					dropdownClass="top-3 text-left"
				/>
				<div> {wallet!.balance}</div>
			</section>
			{isLoadingTransactions && <p>Loading!</p>}
			{!isLoadingTransactions && !transactions.length && <p>No transactions were found for this wallet!</p>}
			{!isLoadingTransactions && transactions.length &&
				<Table columns={tableColumns} data={transactions} hideColumnsAtBreakpoint={hideColumnsAtBreakpoint}>
					{(transaction: Transaction, index: number) => (
						<TransactionRow transaction={transaction} address={wallet!.address}/>
					)}
				</Table>
			}
		</section>
	);
};
