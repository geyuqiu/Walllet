import {fireEvent, render} from "@testing-library/react";
import React from "react";

import {renderWithRouter} from '../../../utils/testing-library';
import {LogoTitle} from "./LogoTitle";

describe("LogoTitle", () => {

	it("should match snapshot", () => {
		const { container } = render(<LogoTitle />);

		expect(container).toMatchSnapshot();
	});

	it("navigates to fee route", () => {
		const {getByTestId, history} = renderWithRouter(<LogoTitle/>);

		fireEvent.click(getByTestId("logo__text"));
		expect(history.location.pathname).toEqual("/fee");
	});
});
