import {render} from "@testing-library/react";
import React from 'react'

import {feeAccessor, timestampAccessor} from '../components/Table/TableColumns';
import useViewport, {toggleColumn} from './useViewport'

function fireResize(width: number) {
	window.innerWidth = width;
	window.dispatchEvent(new Event('resize'));
}

function TestViewportComponent() {
	const viewport = useViewport((columnName: string, hide: boolean) => {
	}, hideColumns);
	return <span>{viewport}</span>;
}

describe('useViewport', () => {
	it.each([
			{width: 320, viewport: "extra-small"},
			{width: 641, viewport: "small"},
			{width: 800, viewport: "medium"},
			{width: 1000, viewport: "large"},
			{width: 1026, viewport: "extra-large"},
			{width: 1329, viewport: "huge"},
	])
		('useViewport listen to window resize and set viewport size responsively',
		(testCase: any) => {
			const {container, rerender} = render(<TestViewportComponent/>);
			const span = container.firstChild;

			fireResize(testCase.width);

			rerender(<TestViewportComponent/>);
			expect(span!.textContent).toBe(testCase.viewport);
	});
});


describe("based on window innerwidth", () => {
	it.each([
		{width: 1280, called: false},
		{width: 1281, called: false},
		{width: 1279, called: true},
	])
	('show and hide column timestamp',
		(testCase: any) => {
			const toggleHideColumn = jest.fn();

			toggleColumn(toggleHideColumn, testCase.width, timestampAccessor, 1280);

			expect(toggleHideColumn).toHaveBeenCalledWith(timestampAccessor, testCase.called);
		});

	it.each([
		{width: 1025, called: false},
		{width: 1024, called: false},
		{width: 1023, called: true},
	])
	('show and hide column fee',
		(testCase: any) => {
			const toggleHideColumn = jest.fn();

			toggleColumn(toggleHideColumn, testCase.width, feeAccessor, 1024);

			expect(toggleHideColumn).toHaveBeenCalledWith(feeAccessor, testCase.called);
		});
});
