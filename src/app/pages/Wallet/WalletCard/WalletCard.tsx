import {Divider} from "app/components/Divider/Divider";
import React from "react";
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

import {SvgCollection} from '../../../assets/svg';
import {Card} from '../../../components/Card/Card';
import {AddressDropdown} from '../AddressDropdown/AddressDropdown';
import {BalanceDisplay} from '../BalanceDisplay/BalanceDisplay';
import {Wallet} from '../model';

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
	addressOnSelect: (value: string) => void
}

export const WalletCard = ({wallets, wallet, addressOnSelect}: WalletProps) => {
	const history = useHistory();

	return (
		<>
			<Card className="bg-green-dark sm:flex sm:justify-center py-12 px-8">
				<Card className="bg-black-darkest p-8 justify-between text-white rounded-lg w-full max-w-screen-xl flex justify-center lg:items-center flex-col lg:flex-row">
					<div className="flex items-center my-auto cursor-pointer" onClick={() => history.push('fee')}>
						<LogoContainer width={57}>
							<Logo width={44}/>
						</LogoContainer>

						<span className="text-2xl font-bold lg:hidden xl:block" data-testid="logo__text">ARK Wallet</span>
					</div>
					<div className="lg:hidden">
						<Divider className="border-black-dark dark:border-theme-secondary-600" type="horizontal"/>
					</div>
					<div className="lg:contents hidden">
						<Divider className="border-black-dark dark:border-theme-secondary-600" type="vertical"/>
					</div>
					<AddressDropdown
						wallets={wallets} wallet={wallet} addressOnSelect={addressOnSelect}
					/>
					<div className="hidden lg:contents">
						<Divider className="border-black-dark dark:border-theme-secondary-600" type="vertical"/>
					</div>
					<BalanceDisplay wallet={wallet}/>
				</Card>
			</Card>
		</>
	);
};
