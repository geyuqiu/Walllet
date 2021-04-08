import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";

import {FeeInput} from "./FeeInput";

describe("FeeInput should", () => {
	it("match snapshot", () => {
		const { container } = render(<FeeInput />);
		expect(container).toMatchSnapshot();
	});

	it("update input when editing slide", () => {
		render(<FeeInput />);

		fireEvent.change(screen.getByRole("slider"), {
			target: {
				value: "0.05678912",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("0.05678912");
	});

	it("update slide when editing input", () => {
		render(<FeeInput />);

		fireEvent.change(screen.getByRole("textbox"), {
			target: {
				value: "0.05678912",
			},
		});

		expect(screen.getByRole("slider")).toHaveValue("0.05678912");
	});

	it("emit value in satoshi on input change", () => {
		const onChange = jest.fn();

		render(<FeeInput onChange={onChange} />);

		fireEvent.change(screen.getByRole("textbox"), {
			target: {
				value: "0.123",
			},
		});

		expect(onChange).toHaveBeenCalledWith("12300000");
	});

	it("not show scientific notation", () => {
		render(<FeeInput />);

		fireEvent.change(screen.getByRole("slider"), {
			target: {
				value: "0.000000001",
			},
		});

		expect(screen.getByRole("textbox")).not.toHaveValue("1e-8");
	});

	it("not allow non-numeric characters", () => {
		render(<FeeInput />);

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "abc012@#9", // go against the design 0.03974945 DARK when sliding the inputRange
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("0129");
	});

	it("not allow more than 8 decimals (rounds the number)", () => {
		render(<FeeInput />);

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "0.00000044",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("0.00000044");

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "0.000000447",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("0.00000045");

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "0.0000000123",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("0.00000001");

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "12345678.12",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("12345678.12");
	});

	it("not allow more than 1 separator", () => {
		render(<FeeInput />);

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "1.234.56",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("1.23456");

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "123456",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("123456");

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "1.23.4.5.6",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("1.23456");
	});

	it("take the first separator", () => {
		render(<FeeInput />);

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "1,234.56",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("1.23456");

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "1.234,56",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("1.23456");
	});
});
