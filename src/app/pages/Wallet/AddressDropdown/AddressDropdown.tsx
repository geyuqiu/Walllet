import {Dropdown, DropdownOption} from "app/components/Dropdown/Dropdown";
import React from "react";

import {Size} from '../../../../types';
import {DropdownButton} from '../../../components/DropdownButton/DropdownButton';
import {useViewport} from '../../../hooks/useViewport';
import {Wallet} from '../model';
import {hideTextBetween} from '../TransactionRow/TransactionRow';

export const buildLabelAndValue = (wallets: Wallet[], wallet: Wallet | null, viewport?: Size | null): DropdownOption[] => {
	const options: DropdownOption[] = [];
	wallets.forEach(w => {
		const address = w.address;
		let label = w.address;
		if (viewport === 'xs') {
			label = hideTextBetween({id: address, prefixLength: 7, suffixLength: 8});
		} else if (viewport === 'lg') {
			label = hideTextBetween({id: address, prefixLength: 11, suffixLength: 10});
		}
		if (wallet && wallet.address != address) {
			options.push({
				label: label,
				value: address
			});
		}
	});
	return options;
}

type AddressDropdownProps = {
	wallets: Wallet[];
	wallet: Wallet | null;
	addressOnSelect: (value: string) => void
}

export const AddressDropdown = ({wallets, wallet, addressOnSelect}: AddressDropdownProps) => {
	const viewport = useViewport();
	const walletDisplayOptions = wallets?.length
		? buildLabelAndValue(wallets, wallet, viewport)
		: [];

	return (
		<Dropdown
			onSelect={(dropdownOption: DropdownOption) => addressOnSelect(String(dropdownOption.value))}
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
	);
};
