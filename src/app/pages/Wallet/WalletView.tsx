import {Dropdown} from "app/components/Dropdown";
import React, {useState} from "react";
import styled from 'styled-components';
import tw from 'twin.macro';

import {SvgCollection} from "../../assets/svg";
import {Button} from '../../components/Button';
import {Card} from '../../components/Card/Card';
import {Divider} from '../../components/Divider';
import {Icon} from '../../components/Icon/Icon';
import {Table} from '../../components/Table/Table';
import {feeAccessor, tableColumns, timestampAccessor} from '../../components/Table/TableColumns';
import {useFetch} from '../../hooks/useFetch';
import {Wallet} from './model';
import {Transaction} from './TransactionRow/model';
import {TransactionRow} from './TransactionRow/TransactionRow';

export interface HideColumnsResponsive {
	accessor: string;
	breakPoint: number;
}

const hideColumnsAtBreakpoint: HideColumnsResponsive[] = [
	{accessor: timestampAccessor, breakPoint: 1280},
	{accessor: feeAccessor, breakPoint: 1024}
];

const LogoContainer = styled.div`
	${tw`flex items-center justify-center mr-2 rounded-sm text-theme-background bg-theme-secondary-500 dark:bg-theme-secondary-700`};
	width: 18px;
	height: 18px;
`;

const {Logo} = SvgCollection;

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
		<>
			<Card className="bg-green-dark">
				<div className="flex items-center my-auto">
					<LogoContainer>
						<Logo width={44}/>
					</LogoContainer>

					<span className="text-2xl font-bold">ARK Wallet</span>
				</div>
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
			</Card>
			<section className="mx-3 sm:mx-12 pt-12">
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
