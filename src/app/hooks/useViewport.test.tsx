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
	it('useViewport listen to window resize and set viewport size responsively', () => {
		const {container, rerender} = render(<TestViewportComponent/>);
		const span = container.firstChild;

		fireResize(320);

		rerender(<TestViewportComponent/>);
		expect(span!.textContent).toBe('extra-small');
		fireResize(641)

		rerender(<TestViewportComponent/>);
		expect(span!.textContent).toBe('small');
		fireResize(800)

		rerender(<TestViewportComponent/>);
		expect(span!.textContent).toBe('medium');

		fireResize(1000);

		rerender(<TestViewportComponent/>);
		expect(span!.textContent).toBe('large');

		fireResize(1026);

		rerender(<TestViewportComponent/>);
		expect(span!.textContent).toBe('extra-large');

		fireResize(1329);

		rerender(<TestViewportComponent/>);
		expect(span!.textContent).toBe('huge');
	})
});
