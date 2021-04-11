import {render} from "@testing-library/react";
import React from 'react'

import {feeAccessor, timestampAccessor} from '../pages/Wallet/TransactionRow/TableColumns';
import useViewport, {toggleColumn} from './useViewport'
import {HideColumnsResponsive} from '../pages/Wallet/WalletView';

function fireResize(width: number) {
	window.innerWidth = width;
	window.dispatchEvent(new Event('resize'));
}

function TestViewportComponent() {
	const viewport = useViewport((columnName: string, hide: boolean, hideColumnsAtBreakpoint: HideColumnsResponsive[]) => {});
	return <span>{viewport}</span>;
}

describe('useViewport', () => {
	it.each([
			{width: 320, viewport: "xs"},
			{width: 641, viewport: "sm"},
			{width: 800, viewport: "md"},
			{width: 1000, viewport: "lg"},
			{width: 1026, viewport: "xl"},
			{width: 1329, viewport: "2xl"},
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
