import {Selector} from "testcafe";

import {createFixture} from "../../../utils/e2e-utils";

createFixture("go to Wallets");

test.only('see fee label', async (t) => {
		await t
			.click(Selector('[data-testid=logo__text]'));
		await t
			.expect(Selector('[data-testid=fee_input__label]').exists).ok();
});

