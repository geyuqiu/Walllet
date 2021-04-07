import {useEffect, useState} from 'react'

import {timestampAccessor} from '../components/Table/TableColumns';

export default function useViewport(toggleHideColumn: Function) {
	const [viewport, setViewport] = useState('');

	const handleResize = () => {
		if (window.innerWidth > 1280) {
			setViewport('huge');
			toggleHideColumn(timestampAccessor, false);
		} else if (window.innerWidth > 1024) {
			setViewport('extra-large');
			toggleHideColumn(timestampAccessor, false);
		} else if (window.innerWidth > 992) {
			setViewport('large');
			toggleHideColumn(timestampAccessor, true);
		} else if (window.innerWidth > 768) {
			setViewport('medium');
			toggleHideColumn(timestampAccessor, true);
		} else if (window.innerWidth > 640) {
			setViewport('small');
			toggleHideColumn(timestampAccessor, true);
		} else {
			setViewport('extra-small');
			toggleHideColumn(timestampAccessor, true);
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
