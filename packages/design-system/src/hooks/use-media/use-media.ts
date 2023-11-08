import React from 'react';

/**
 * Window Size Props
 */
export type WindowSizeProps = {
	width: number;
	height: number;
};

/**
 * __Hook `useMedia`__
 *
 * Define if current device have a small screen.
 */
export function useMedia() {
	const [windowSize, setWindowSize] = React.useState<WindowSizeProps>({
		width: 0,
		height: 0,
	});

	React.useEffect(() => {
		function handleResize(): void {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		windowSize,
		isSmall: windowSize.width > 0 && windowSize.width < 768,
	};
}
