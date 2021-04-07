import {useEffect, useState} from 'react'

import {feeAccessor, timestampAccessor} from '../components/Table/TableColumns';

export const toggleColumn = (toggleHideColumn: Function, innerWidth: number, columnAccessor: string, breakPoint: number) => {
	toggleHideColumn(columnAccessor, innerWidth >= breakPoint ? false : true);
};

export default function useViewport(toggleHideColumn: Function) {
	const [viewport, setViewport] = useState('');

	const handleResize = () => {
		const innerWidth = window.innerWidth;
		toggleColumn(toggleHideColumn, innerWidth, timestampAccessor, 1280);
		toggleColumn(toggleHideColumn, innerWidth, feeAccessor, 1024);

		if (innerWidth > 1280) {
			setViewport('huge');
		} else if (innerWidth > 1024) {
			setViewport('extra-large');
		} else if (innerWidth > 992) {
			setViewport('large');
		} else if (innerWidth > 768) {
			setViewport('medium');
		} else if (innerWidth > 640) {
			setViewport('small');
		} else {
			setViewport('extra-small');
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize)
		};
	}, [])

	return viewport;
}
