import {useEffect, useState} from 'react'

import {timestampAccessor} from '../components/Table/TableColumns';

export const toggleTimeStamp = (toggleHideColumn: Function, innerWidth: number) => {
	toggleHideColumn(timestampAccessor, innerWidth >= 1280 ? false : true);
};

export default function useViewport(toggleHideColumn: Function) {
	const [viewport, setViewport] = useState('');

	const handleResize = () => {
		const innerWidth = window.innerWidth;
		toggleTimeStamp(toggleHideColumn, innerWidth);

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
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	return viewport;
}
