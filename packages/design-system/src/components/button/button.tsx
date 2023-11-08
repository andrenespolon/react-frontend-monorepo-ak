import React from 'react';

import { LoadingButton, LoadingButtonProps } from '@atlaskit/button';
import FocusRing from '@atlaskit/focus-ring';

export const Button = React.memo<LoadingButtonProps>(({ ...props }) => {
	return (
		<FocusRing>
			<LoadingButton {...props} />
		</FocusRing>
	);
});

Button.displayName = 'Button';
