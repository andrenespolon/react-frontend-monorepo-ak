import React from 'react';

import IconEmoji from '@atlaskit/icon/glyph/emoji';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button/Icon',
	component: Button,
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * __Icon__
 */
export const Before: Story = {
	args: {
		iconBefore: React.createElement(IconEmoji),
		isLoading: false,
	},
};

export const After: Story = {
	args: {
		iconAfter: React.createElement(IconEmoji),
		isLoading: false,
	},
};
