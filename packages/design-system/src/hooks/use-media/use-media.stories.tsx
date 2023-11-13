import React from 'react';

import { token } from '@atlaskit/tokens';

import type { Meta, StoryObj } from '@storybook/react';

import { useMedia } from './index';

function Demo() {
	const { isSmall, windowSize } = useMedia();

	return (
		<div>
			<pre
				style={{
					resize: 'both',
					padding: token('space.100'),
				}}
			>
				<code>isSmall: {String(isSmall)}</code>
				<br />
				<code>
					windowSize: {windowSize.height}px x {windowSize.width}px
				</code>
			</pre>
		</div>
	);
}

const meta: Meta = {
	title: 'Hooks/use-media',
	component: Demo,
	parameters: {},
	args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IsSmall: Story = {
	args: {},
};

export const WindowSize: Story = {
	args: {},
};
