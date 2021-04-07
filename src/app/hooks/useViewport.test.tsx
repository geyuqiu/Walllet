import {render} from "@testing-library/react";
import React from 'react'

import useViewport from './useViewport'

// simulate window resize
function fireResize(width: number) {
	// @ts-ignore
	window.innerWidth = width;
	window.dispatchEvent(new Event('resize'));
}

// Test component that uses the Hook
function EffecfulComponent() {
	const viewport = useViewport();
	return <span>{viewport}</span>;
}

describe('useViewport', () => {
	it('useViewport listen to window resize and set viewport size responsively', () => {
		const {container, rerender} = render(<EffecfulComponent/>);
		const span = container.firstChild;

		fireResize(320);

		rerender(<EffecfulComponent/>);
		expect(span!.textContent).toBe('extra-small');
		fireResize(641)

		rerender(<EffecfulComponent/>);
		expect(span!.textContent).toBe('small');
		fireResize(800)

		rerender(<EffecfulComponent/>);
		expect(span!.textContent).toBe('medium');

		fireResize(1000);

		rerender(<EffecfulComponent/>);
		expect(span!.textContent).toBe('large');

		fireResize(1280);

		rerender(<EffecfulComponent/>);
		expect(span!.textContent).toBe('extra-large');
	})
});
