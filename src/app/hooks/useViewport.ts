import {useEffect, useState} from 'react'

export default function useViewport() {
	const [viewport, setViewport] = useState('');

	const handleResize = () => {
		if (window.innerWidth > 1024) {
			setViewport('extra-large')
		} else if (window.innerWidth > 992) {
			setViewport('large')
		} else if (window.innerWidth > 768) {
			setViewport('medium')
		} else if (window.innerWidth > 640) {
			setViewport('small')
		} else {
			setViewport('extra-small')
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
