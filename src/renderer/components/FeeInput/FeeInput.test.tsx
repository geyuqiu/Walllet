import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { FeeInput } from "./FeeInput";

describe("FeeInput", () => {
	it("should match snapshot", () => {
		const { container } = render(<FeeInput />);
		expect(container).toMatchSnapshot();
	});

	it("should update input when editing slide", () => {
		render(<FeeInput />);

		fireEvent.change(screen.getByRole("slider"), {
			target: {
				value: "0.05678912",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("0.05678912");
	});

	it("should update slide when editing input", () => {
		render(<FeeInput />);

		fireEvent.change(screen.getByRole("textbox"), {
			target: {
				value: "0.05678912",
			},
		});

		expect(screen.getByRole("slider")).toHaveValue("0.05678912");
	});

	it("should emit value in satoshi on input change", () => {
		const onChange = jest.fn();

		render(<FeeInput onChange={onChange} />);

		fireEvent.change(screen.getByRole("textbox"), {
			target: {
				value: "0.123",
			},
		});

		expect(onChange).toHaveBeenCalledWith("12300000");
	});

	it("should not show scientific notation", () => {
		render(<FeeInput />);

		fireEvent.change(screen.getByRole("slider"), {
			target: {
				value: "0.000000001",
			},
		});

		expect(screen.getByRole("textbox")).not.toHaveValue("1e-8");
	});

	test.skip("should not allow non-numeric characters", () => {
		render(<FeeInput />);

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "abc012@#9",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("0129");
	});

	test.skip("should not allow more than 8 decimals", () => {
		render(<FeeInput />);

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

	it("should not allow more than 1 separator", () => {
		render(<FeeInput />);

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "1.234.56",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("1.23456");

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "1.23.4.5.6",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("1.23456");
	});

	it("should use comma as separator", () => {
		render(<FeeInput />);

		fireEvent.input(screen.getByRole("textbox"), {
			target: {
				value: "1,234.56",
			},
		});

		expect(screen.getByRole("textbox")).toHaveValue("1.23456");
	});
});
