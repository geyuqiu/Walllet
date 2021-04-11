import {BigNumber} from '@arkecosystem/platform-sdk-support';
import {Divider} from "app/components/Divider/Divider";
import {Dropdown} from "app/components/Dropdown/Dropdown";
import {Icon} from "app/components/Icon/Icon";
import React from "react";
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

import {SvgCollection} from '../../../assets/svg';
import {Amount} from '../../../components/Amount/Amount';
import {Card} from '../../../components/Card/Card';
import {Circle} from '../../../components/Circle/Circle';
import {Wallet} from '../model';
import {hideTextMiddle} from '../TransactionRow/TransactionRow';

type LogoContainerProps = {
	width: number;
}

const LogoContainer = styled.div<LogoContainerProps>`
  ${({width}) => width && `
    width: ${width}px;
  `};
  height: auto;
`;

const {Logo} = SvgCollection;

type WalletProps = {
	wallets: Wallet[];
	wallet: Wallet | null;
}

export const WalletCard = ({wallets, wallet}: WalletProps) => {
	const history = useHistory();
	const walletDisplayOptions = [
		{label: 'all', value: "all"},
		{label: 'favorites', value: "favorites"},
		{label: 'ledger', value: "ledger"},
	];

	return (
		<>
			{!wallet && <p>Loading ...</p>}
			{wallet &&
			<Card className="bg-green-dark sm:flex sm:justify-center">
				<Card className="bg-black-darkest text-white rounded-lg w-full max-w-screen-xl flex justify-center flex-col lg:flex-row">
					<div className="flex items-center my-auto cursor-pointer" onClick={() => history.push('fee')}>
						<LogoContainer width={57}>
							<Logo width={44}/>
						</LogoContainer>

						<span className="text-2xl font-bold lg:hidden xl:block" data-testid="logo__text">ARK Wallet</span>
					</div>
					<div className="lg:hidden">
						<Divider className="border-black-light dark:border-theme-secondary-600" type="horizontal"/>
					</div>
					<div className="lg:contents hidden">
						<Divider className="border-black-light dark:border-theme-secondary-600" type="vertical"/>
					</div>
					<Dropdown
						toggleContent={
							<div className="flex justify-between items-center">
								<div className="flex items-center">
									<Circle className="rounded-l-3xl mr-5 border-r bg-black-dark" size="lg">
										<Icon name="Address" width={15} height={15} fill='#000000' stroke='#FBC457'/>
									</Circle>
									<span className="hidden sm:block">{wallet.address}</span>
									<span className="block sm:hidden">{hideTextMiddle(wallet.address, 7, 8)}</span>
								</div>
								<Icon name="ChevronDown" width={15} height={15} className="mr-5"/>
							</div>
						}
						className="border border-gray-darkest border-opacity-10 rounded-l-3xl rounded-r-3xl"
						options={walletDisplayOptions}
						dropdownClass="top-3 text-left"
					/>
					<div className="hidden lg:block">
						<Divider className="border-black-light dark:border-theme-secondary-600" type="vertical"/>
					</div>
					<div className="mt-6 flex flex-row">
						<Circle className="border rounded-full mr-3" size="lg">
								<Icon name="Balance" width={15} height={15} fill='#000000' stroke='#FBC457'/>
						</Circle>
						<div className="flex flex-col">
							<span className="text-gray-darkest">Balance</span>
							<Amount
								data-testid="balance__Amount"
								value={BigNumber.make(wallet.balance)}
								className="font-bold"
							/>
						</div>
					</div>
				</Card>
			</Card>
			}
		</>
	);
};
