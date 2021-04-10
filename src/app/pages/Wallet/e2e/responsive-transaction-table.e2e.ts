import {Selector} from "testcafe";

import {createFixture} from "../../../utils/e2e-utils";

createFixture("go to Wallets");

test('see logo text', async (t) => {
		await t
			.expect(Selector('[data-testid=logo__text]').exists).ok();
		await t
			.expect(Selector('[data-testid=logo__text]').withText('ARK Wallet').exists).ok();

});

test('all 6 columns exists on xl screens', async (t) => {
	for (let i = 0; i < 6; i++) {
		await t.resizeWindow(1300, 800)
			.expect(Selector(`[data-testid=table__th--${i}]`).exists).ok();
	}
});
