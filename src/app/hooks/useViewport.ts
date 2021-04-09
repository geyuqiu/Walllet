import {useEffect, useState} from 'react'

import {HideColumnsResponsive} from '../pages/Wallet/WalletView';

export const toggleColumn = (toggleHideColumn: Function, innerWidth: number, columnAccessor: string, breakPoint: number) => {
	toggleHideColumn(columnAccessor, innerWidth >= breakPoint ? false : true);
};

export default function useViewport(toggleHideColumn: Function, hideColumnsAtBreakpoint: any[]) {
	const [viewport, setViewport] = useState('');

	const handleResize = () => {
		const innerWidth = window.innerWidth;
		hideColumnsAtBreakpoint.forEach((hideColumnAtBreakpoint: HideColumnsResponsive) =>
			toggleColumn(toggleHideColumn, innerWidth, hideColumnAtBreakpoint.accessor, hideColumnAtBreakpoint.breakPoint)
		);

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
