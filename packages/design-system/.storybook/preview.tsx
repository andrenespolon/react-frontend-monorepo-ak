import '@atlaskit/css-reset';

import React from 'react';

// import { withDesignTokens } from '@atlaskit/storybook-addon-design-system';
import { setGlobalTheme } from '@atlaskit/tokens';

export const withTheme = (Story: any) => {
	/**
	 * Set global theme
	 */
	setGlobalTheme({
		colorMode: 'light',
		dark: 'dark',
		light: 'light',
		shape: 'shape',
		spacing: 'spacing',
		typography: 'typography',
	});

	return <Story />;
};

export const decorators = [withTheme];
