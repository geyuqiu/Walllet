import {fireEvent, render} from '@testing-library/react';
import React from "react";

import {Button} from "./Button";

describe.skip("Button", () => {
	it("should render", () => {
		const { container } = render(<Button />);

		expect(container).toMatchSnapshot();
	});

	it("should render a small one", () => {
		const { container } = render(<Button size="sm" />);

		expect(container).toMatchSnapshot();
	});

	it("should render a large one", () => {
		const { container } = render(<Button size="lg" />);

		expect(container).toMatchSnapshot();
	});

	it("should render an icon", () => {
		const { container } = render(<Button size="icon" />);

		expect(container).toMatchSnapshot();
	});

	it("should render if disabled", () => {
		const { asFragment, getByTestId } = render(
			<Button disabled data-testid="Button">
				Click
			</Button>,
		);

		expect(getByTestId("Button")).toBeDisabled();
		expect(asFragment()).toMatchSnapshot();
	});

	it("should emit event on click", () => {
		const onClick = jest.fn();
		const { getByText } = render(<Button onClick={onClick}>Click Me</Button>);

		fireEvent.click(getByText("Click Me"));
		expect(onClick).toHaveBeenCalled();
	});

	it("should render with icon", () => {
		const { container } = render(<Button icon="Plus">Click Me</Button>);
		expect(container).toMatchSnapshot();
	});

	it("should render with icon and custom icon width and height", () => {
		const { container } = render(
			<Button icon="Balance" iconWidth={20} iconHeight={20}>
				Click Me
			</Button>,
		);
		expect(container).toMatchSnapshot();
	});

	it("should render with loading state enabled", () => {
		const { container } = render(<Button isLoading>Click Me</Button>);

		expect(container).toMatchSnapshot();
	});

	it("should render loading with icon", () => {
		const { container } = render(<Button isLoading={true} size="icon" icon="icon" iconHeight={2} iconWidth={2} />);

		expect(container).toMatchSnapshot();
	});
});
