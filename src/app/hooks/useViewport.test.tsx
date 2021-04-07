import {render} from "@testing-library/react";
import React from 'react'

import useViewport from './useViewport'

function fireResize(width: number) {
	window.innerWidth = width;
	window.dispatchEvent(new Event('resize'));
}

function TestViewportComponent() {
	const viewport = useViewport((columnName: string, hide: boolean) => {});
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
