import {Divider} from "app/components/Divider/Divider";
import React from "react";

import {Card} from '../../../components/Card/Card';
import {AddressDropdown} from '../AddressDropdown/AddressDropdown';
import {BalanceDisplay} from '../BalanceDisplay/BalanceDisplay';
import {LogoTitle} from '../LogoTitle/LogoTitle';
import {Wallet} from '../model';

type WalletProps = {
	wallets: Wallet[];
	wallet: Wallet | null;
	addressOnSelect: (value: string) => void
}

export const WalletCard = ({wallets, wallet, addressOnSelect}: WalletProps) => {
	return (
		<Card className="bg-green-dark sm:flex sm:justify-center py-12 px-8">
			<Card className="bg-black-darkest p-8 justify-between text-white rounded-lg w-full max-w-screen-xl flex justify-center lg:items-center flex-col lg:flex-row">
				<LogoTitle/>
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
	);
};
