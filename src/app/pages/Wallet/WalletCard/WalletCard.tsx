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
import useViewport from '../../../hooks/useViewport';

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

export const buildLabelAndValue = (wallets: Wallet[], viewport?: string) => {
	const options: any[] = [];
	wallets.forEach(w => {
		let address = w.address;
		if (viewport === 'extra-small') {
			address = hideTextMiddle(address, 7, 8);
		} else if(viewport === 'extra-laarge') {
			address = hideTextMiddle(address, 11, 10);
		}
		options.push({
			label: address,
			value: address
		});
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
		? buildLabelAndValue(wallets, viewport)
		: [];

	return (
		<>
			{!wallet && <p>Loading ...</p>}
			{wallet &&
			<Card className="bg-green-dark sm:flex sm:justify-center">
				<Card className="bg-black-darkest text-white rounded-lg w-full max-w-screen-xl flex justify-center lg:items-center flex-col lg:flex-row">
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
						onSelect={(value: string) => addressOnSelect(value)}
						toggleContent={
							<div className="flex justify-between items-center h-11">
								<div className="flex items-center">
									<div className="hidden sm:block">
										<Circle className="rounded-l-3xl border-r bg-black-light" size="lg">
											<Icon name="Address" width={15} height={15} fill='#000000' stroke='#FBC457' className="ml-2" data-testid="dropdown__left__icon"/>
										</Circle>
									</div>
									<div className="ml-5">
										<span className="hidden sm:block lg:hidden xl:block">{wallet.address}</span>
										<span className="block sm:hidden">{hideTextMiddle(wallet.address, 7, 8)}</span>
										<span className="hidden lg:block xl:hidden">{hideTextMiddle(wallet.address, 11, 10)}</span>
									</div>
								</div>
								<Icon name="ChevronDown" width={15} height={15} className="mx-5" data-testid="dropdown__right_icon"/>
							</div>
						}
						className="border border-gray-darkest border-opacity-10 rounded-l-3xl rounded-r-3xl"
						options={walletDisplayOptions}
						dropdownClass="top-3 text-left w-full"
					/>
					<div className="hidden lg:contents">
						<Divider className="border-black-light dark:border-theme-secondary-600" type="vertical"/>
					</div>
					<div className="flex flex-row mt-6 lg:mt-0">
						<div className="hidden sm:block">
							<Circle className="border rounded-full mr-3" size="lg">
									<Icon name="Balance" width={15} height={15} fill='#000000' stroke='#FBC457'/>
							</Circle>
						</div>
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
