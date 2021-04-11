import {BigNumber} from '@arkecosystem/platform-sdk-support';
import {Icon} from "app/components/Icon/Icon";
import React from "react";

import {Amount} from '../../../components/Amount/Amount';
import {Circle} from '../../../components/Circle/Circle';
import {Wallet} from '../model';

type BalanceDisplayProps = {
	wallet: Wallet | null;
}

export const BalanceDisplay = ({wallet}: BalanceDisplayProps) => (
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
	);
