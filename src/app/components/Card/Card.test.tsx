import {render} from '@testing-library/react';
import React from "react";

import {Card} from "./Card";

describe("Card", () => {
	it("should render", () => {
		const { container } = render(
			<Card>
				card
			</Card>
		);

		expect(container).toMatchSnapshot();
	});
});
