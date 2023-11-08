/**
 * CSS Reset
 *
 * Import all base stylesheet for enhance components.
 */
import '@rfm/design-system';

import React from 'react';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	/**
	 * Use a hook to set global theme.
	 *
	 * Add a FOCU function here to avoid css styles blink. Also, add a function
	 * to load a custom theme from api to apply whitelabel.
	 */
	return <Component {...pageProps} />;
}
