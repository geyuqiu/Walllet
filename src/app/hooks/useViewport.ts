import {useEffect, useState} from 'react'

import {Size} from '../../types';
import {HideColumnsResponsive} from '../pages/Wallet/WalletView';

export const toggleColumn = (toggleHideColumn: Function, innerWidth: number, columnAccessor: string, breakPoint: number) => {
	toggleHideColumn(columnAccessor, innerWidth >= breakPoint ? false : true);
};

export const useViewport = () => {
	const [viewport, setViewport] = useState<Size | null>(null);

	const handleResize = () => {
		const innerWidth = window.innerWidth;

		if (innerWidth >= 1360) {
			setViewport('2xl');
		} else if (innerWidth >= 1280) {
			setViewport('xl');
		} else if (innerWidth >= 1024) {
			setViewport('lg');
		} else if (innerWidth >= 768) {
			setViewport('md');
		} else if (innerWidth >= 640) {
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

export const useViewportTable = (toggleHideColumn?: Function, hideColumnsAtBreakpoint?: HideColumnsResponsive[]) => {
	const handleTableResize = () => {
		const innerWidth = window.innerWidth;
		hideColumnsAtBreakpoint?.forEach((hideColumnAtBreakpoint: HideColumnsResponsive) =>
			toggleColumn(toggleHideColumn!, innerWidth, hideColumnAtBreakpoint.accessor, hideColumnAtBreakpoint.breakPoint)
		);
	};

	useEffect(() => {
		window.addEventListener('resize', handleTableResize);
		handleTableResize();
		return () => {
			window.removeEventListener('resize', handleTableResize)
		};
	}, [])
}

export const useViewportDropdown = (isOpen: boolean, ref: any) => {
	const handleDropDownResize = (): void => {
		if (isOpen && ref) {
			const numberFromPixels = (value: string): number => (value ? parseInt(value.replace("px", "")) : 0);

			const OFFSET = 30;

			const parent = (ref.current as unknown) as HTMLElement;

			const toggleElement: HTMLElement | null = parent.querySelector('[data-testid="dropdown__toggle"]');
			const dropdownElement: HTMLElement | null = parent.querySelector('[data-testid="dropdown__content"]');

			if (toggleElement && dropdownElement) {
				const setStyles = (styles: Record<string, any>) => {
					Object.assign(dropdownElement.style, styles);
				};

				const toggleHeight: number = toggleElement.parentElement!.offsetHeight;

				const spaceBefore: number =
					toggleElement.getBoundingClientRect().top + document.documentElement.scrollTop;
				const spaceAfter: number = document.body.clientHeight - (spaceBefore + toggleHeight);

				setStyles({height: null, marginTop: null, "z-index": 1});

				const styles = getComputedStyle(dropdownElement);

				if (
					spaceAfter < dropdownElement.offsetHeight + numberFromPixels(styles.marginTop) + OFFSET &&
					spaceBefore > dropdownElement.offsetHeight + numberFromPixels(styles.marginTop) + OFFSET
				) {
					setStyles({
						opacity: 100,
						marginTop: `-${
							dropdownElement.offsetHeight + toggleHeight + numberFromPixels(styles.marginTop)
						}px`,
					});
				} else if (dropdownElement.firstElementChild) {
					const newHeight = spaceAfter - numberFromPixels(styles.marginTop) - OFFSET;

					const newStyles =
						newHeight >=
						dropdownElement.firstElementChild.clientHeight +
						numberFromPixels(styles.paddingTop) +
						numberFromPixels(styles.paddingBottom)
							? {
								height: null,
								overflowY: null,
							}
							: {
								height: `${newHeight}px`,
								marginTop: null,
								overflowY: "scroll",
							};

					setStyles({opacity: 100, ...newStyles});
				}
			}
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleDropDownResize);
		handleDropDownResize();
		return () => {
			window.removeEventListener('resize', handleDropDownResize)
		};
	}, [isOpen])
}
