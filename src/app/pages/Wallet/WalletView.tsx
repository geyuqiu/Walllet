import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import styled from 'styled-components';
import tw from 'twin.macro';

import {SvgCollection} from "../../assets/svg";
import {Table} from '../../components/Table/Table';
import {feeAccessor, tableColumns, timestampAccessor} from './TransactionRow/TableColumns';
import {useFetch} from '../../hooks/useFetch';
import {Wallet} from './model';
import {Transaction} from './TransactionRow/model';
import {TransactionRow} from './TransactionRow/TransactionRow';
import {WalletCard} from './WalletCard/WalletCard';

export interface HideColumnsResponsive {
	accessor: string;
	breakPoint: number;
}

const hideColumnsAtBreakpoint: HideColumnsResponsive[] = [
	{accessor: timestampAccessor, breakPoint: 1280},
	{accessor: feeAccessor, breakPoint: 1024}
];

export const WalletView = () => {
	const history = useHistory();
	const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);
	const [wallet, setWallet] = useState<Wallet | null >({
		address: 'AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW',
		balance: '0'
	});
	const {wallets, transactions} = useFetch(wallet, setIsLoadingTransactions);

	return (
		<>
			<WalletCard wallets={wallets} wallet={wallet}/>
			<section className="ml-6 mr-3 sm:mx-8 sm:flex sm:justify-center pt-12">
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
		</>
	);
};
