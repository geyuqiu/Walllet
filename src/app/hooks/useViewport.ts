import {useEffect, useState} from 'react'

import {Size} from '../../types';
import {HideColumnsResponsive} from '../pages/Wallet/WalletView';

export const toggleColumn = (toggleHideColumn: Function, innerWidth: number, columnAccessor: string, breakPoint: number) => {
	toggleHideColumn(columnAccessor, innerWidth >= breakPoint ? false : true);
};

export default function useViewport(toggleHideColumn?: Function, hideColumnsAtBreakpoint?: HideColumnsResponsive[]) {
	const [viewport, setViewport] = useState<Size | null>(null);

	const handleResize = () => {
		const innerWidth = window.innerWidth;
		hideColumnsAtBreakpoint?.forEach((hideColumnAtBreakpoint: HideColumnsResponsive) =>
			toggleColumn(toggleHideColumn!, innerWidth, hideColumnAtBreakpoint.accessor, hideColumnAtBreakpoint.breakPoint)
		);

		if (innerWidth > 1280) {
			setViewport('2xl');
		} else if (innerWidth > 1024) {
			setViewport('xl');
		} else if (innerWidth > 992) {
			setViewport('lg');
		} else if (innerWidth > 768) {
			setViewport('md');
		} else if (innerWidth > 640) {
			setViewport('sm');
		} else {
			setViewport('xs');
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
