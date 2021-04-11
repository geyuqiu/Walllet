import {BigNumber} from '@arkecosystem/platform-sdk-support';
import {Divider} from "app/components/Divider/Divider";
import {Dropdown, DropdownOption} from "app/components/Dropdown/Dropdown";
import {Icon} from "app/components/Icon/Icon";
import React from "react";
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

import {Size} from '../../../../types';
import {SvgCollection} from '../../../assets/svg';
import {Amount} from '../../../components/Amount/Amount';
import {Card} from '../../../components/Card/Card';
import {Circle} from '../../../components/Circle/Circle';
import {DropdownButton} from '../../../components/DropdownButton/DropdownButton';
import useViewport from '../../../hooks/useViewport';
import {Wallet} from '../model';
import {hideTextBetween} from '../TransactionRow/TransactionRow';

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

export const buildLabelAndValue = (wallets: Wallet[], wallet: Wallet | null, viewport?: Size | null): DropdownOption[] => {
	const options: DropdownOption[] = [];
	wallets.forEach(w => {
		let address = w.address;
		if (wallet && wallet.address != address) {
			if (viewport === 'xs') {
				address = hideTextBetween({id: address, prefixLength: 7, suffixLength: 8});
			} else if(viewport === 'xl') {
				address = hideTextBetween({id: address, prefixLength: 11, suffixLength: 10});
			}
			options.push({
				label: address,
				value: address
			});
		}
	});
	return options;
}

type WalletProps = {
	wallets: Wallet[];
	wallet: Wallet | null;
	addressOnSelect: (value: string) => void
}

export const WalletCard = ({wallets, wallet, addressOnSelect}: WalletProps) => {
	const history = useHistory();
	const viewport = useViewport();
	const walletDisplayOptions = wallets?.length
		? buildLabelAndValue(wallets, wallet, viewport)
		: [];

	return (
		<>
			<Card className="bg-green-dark sm:flex sm:justify-center">
				<Card className="bg-black-darkest justify-between text-white rounded-lg w-full max-w-screen-xl flex justify-center lg:items-center flex-col lg:flex-row">
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
					<Dropdown
						onSelect={(dropdownOption: DropdownOption) => addressOnSelect(dropdownOption.label)}
						toggleContent={(isOpen: boolean) => (
							<DropdownButton
								isOpen={isOpen}
								label={
									<div className="ml-5">
										<span className="hidden sm:block lg:hidden xl:block">{wallet?.address}</span>
										<span className="block sm:hidden">{hideTextBetween({
											id: wallet?.address,
											prefixLength: 7,
											suffixLength: 8
										})}</span>
										<span className="hidden lg:block xl:hidden">{hideTextBetween({
											id: wallet?.address,
											prefixLength: 11,
											suffixLength: 10
										})}</span>
									</div>
								}
							/>
						)}
						className="border border-gray-darkest border-opacity-10 rounded-l-3xl rounded-r-3xl"
						options={walletDisplayOptions}
						dropdownClass="top-3 text-left w-full"
					/>
					<div className="hidden lg:contents">
						<Divider className="border-black-dark dark:border-theme-secondary-600" type="vertical"/>
					</div>
					<div className="flex flex-row mt-6 lg:mt-0">
						<div className="hidden sm:block">
							<Circle className="border rounded-full mr-3" size="lg">
									<Icon name="Balance" width={15} height={15} fill='#000000' stroke='#FBC457'/>
							</Circle>
						</div>
						<div className="flex flex-col">
							<span className="text-gray-darkest">Balance</span>
							{wallet?.balance && <Amount
								data-testid="balance__amount"
								value={BigNumber.make(wallet.balance)}
								className="font-bold"
							/>}
						</div>
					</div>
				</Card>
			</Card>
		</>
	);
};
