import {Wallet} from '../pages/Wallet/model';
import {Transaction} from '../pages/Wallet/TransactionRow/model';
import {parseTransaction, parseWallets} from './useFetch';

describe("parseWallets should ", () => {
	it("parse wallet address and balance", () => {
		const address = "AdzbhuDTyhnfAqepZzVcVsgd1Ym6FgETuW";
		const balance = "2009342693388606";
		const response = {
			"data": [
				{
					"address": address,
					"publicKey": "02956549fc7ee3e5271f6c410d5dc56afda419433a1c99b6795404a352e2b7163f",
					"nonce": "40",
					"balance": balance,
					"attributes": {},
					"isDelegate": false,
					"isResigned": false
				}
			]
		};

		const wallets: Wallet[] = parseWallets(response);

		expect(wallets[0].address).toEqual(address);
		expect(wallets[0].balance).toEqual(balance);
	});
});

describe("parseTransaction should", () => {
	it("parse transaction", () => {
		const response = {
			"data": [
				{
					"id": "74b4d4449a7b912921c666cb8296543de7d897e5b0fcefde3aca6e8ffc16f5f6",
					"blockId": "34f7fee17283b414e44f27a141206c176a9374bb9ac2e88eb39a129e6eab9ba7",
					"version": 2,
					"type": 0,
					"typeGroup": 1,
					"amount": "5000000000000",
					"fee": "6856637",
					"sender": "D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
					"senderPublicKey": "03d3fdad9c5b25bf8880e6b519eb3611a5c0b31adebc8455f0e096175b28321aff",
					"recipient": "DM7UiH4b2rW2Nv11Wu6ToiZi8MJhGCEWhP",
					"signature": "dca037e2b4ff42cd2ebdff7044b5a1c7e652ffdb0a6cce4c2ac318a9b86aa6f36a31574f5b03ee09aa7116447cb01c553cbd420db5716d7c72c81a3288855098",
					"signSignature": "30cfc5d458138e93bd1dd74ab9d518fd94a24ab3539033844da8b048c146b6d884ef34fa4288e03e6c8f6a5facef3e8b9ca1ab8088268fcf9b37033bfaacd27c",
					"confirmations": 1552790,
					"timestamp": {
						"epoch": 113724104,
						"unix": 1603825304,
						"human": "2020-10-27T19:01:44.000Z"
					},
					"nonce": "277"
				},
			]
		};

		const transactions: Transaction[] = parseTransaction(response);

		expect(transactions[0].timestamp).toEqual("27.10.2020");
		expect(transactions[0].amount).toEqual("5000000000000");
		expect(transactions[0].fee).toEqual("6856637");
	});
});
