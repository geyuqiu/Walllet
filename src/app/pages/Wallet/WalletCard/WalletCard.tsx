import React from "react";

import {Card} from '../../../components/Card/Card';
import {Divider} from "app/components/Divider/Divider";
import {useHistory} from "react-router-dom";
import {Dropdown} from "app/components/Dropdown/Dropdown";
import {Button} from '../../../components/Button/Button';
import {hideTextMiddle} from '../TransactionRow/TransactionRow';
import {Icon} from "app/components/Icon/Icon";
import {Wallet} from '../model';
import styled from 'styled-components';
import tw from 'twin.macro';
import {SvgCollection} from '../../../assets/svg';


const LogoContainer = styled.div`
	${tw`flex items-center justify-center mr-2 rounded-sm text-theme-background bg-theme-secondary-500 dark:bg-theme-secondary-700`};
	width: 18px;
	height: 18px;
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
				<Card
					className="bg-black-darkest text-white rounded-lg w-full max-w-screen-xl flex justify-center flex-col lg:flex-row">
					<div className="flex items-center my-auto cursor-pointer" onClick={() => history.push('fee')}>
						<LogoContainer>
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
							<div className="relative">
								<Button size="icon" className="text-left" icon="Address" fill='#000000' stroke='#FBC457'>
									<span className="hidden sm:block">{wallet.address}</span>
									<span className="block sm:hidden">{hideTextMiddle(wallet.address, 7, 8)}</span>
									<Icon name="ChevronDown" width={20} height={20}/>
								</Button>
							</div>
						}
						options={walletDisplayOptions}
						dropdownClass="top-3 text-left"
					/>
					<div className="lg:hidden">
						<Divider className="border-black-light dark:border-theme-secondary-600" type="horizontal"/>
					</div>
					<div>
						<Icon name="Balance" width={20} height={20} fill='#000000' stroke='#FBC457'/>
						{wallet.balance}
					</div>
				</Card>
			</Card>
			}
		</>
	);
};
