import { act, fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryHistory } from "history/createMemoryHistory";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";

import { Header } from "./Header";

describe("Header", () => {
	it("should match snapshot", () => {
		const { container } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});

	let history: MemoryHistory;
	let getByTestId: any;

	describe("nav", () => {
		beforeEach(() => {
			history = createMemoryHistory();
			({ getByTestId } = render(
				<Router history={history}>
					<Header />
				</Router>
			));
		});

		it("navigates to wallet route", () => {
			const linkWallet = getByTestId("link__wallet");

			act(() => {
				fireEvent.click(linkWallet);
			});

			expect(history.location.pathname).toBe("/");
		});

		it("navigates to fee route", () => {
			const linkFee = getByTestId("link__fee");

			act(() => {
				fireEvent.click(linkFee);
			});

			expect(history.location.pathname).toBe("/fee");
		});
	});
});
