import {Divider} from "app/components/Divider/Divider";
import {Dropdown} from "app/components/Dropdown/Dropdown";
import {Icon} from "app/components/Icon/Icon";
import React from "react";
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

import {SvgCollection} from '../../../assets/svg';
import {Card} from '../../../components/Card/Card';
import {Wallet} from '../model';
import {hideTextMiddle} from '../TransactionRow/TransactionRow';
import {Circle} from '../../../components/Circle/Circle';

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
							<div className="flex">
								<Circle className="" size="sm">
									<Icon name="Address" width={20} height={20} fill='#000000' stroke='#FBC457'/>
								</Circle>
								<span className="hidden sm:block">{wallet.address}</span>
								<span className="block sm:hidden">{hideTextMiddle(wallet.address, 7, 8)}</span>
								<Icon name="ChevronDown" width={20} height={20}/>
							</div>
						}
						options={walletDisplayOptions}
						dropdownClass="top-3 text-left"
					/>
					<div className="hidden lg:block">
						<Divider className="border-black-light dark:border-theme-secondary-600" type="vertical"/>
					</div>
					<div>
						<Circle className="" size="lg">
							<Icon name="Balance" width={20} height={20} fill='#000000' stroke='#FBC457'/>
						</Circle>
						{wallet.balance}
					</div>
				</Card>
			</Card>
			}
		</>
	);
};
