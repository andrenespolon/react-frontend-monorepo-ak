import React from 'react';

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
 * __Coomponent__
 */
export const Default: Story = {
	args: {
		appearance: 'default',
		component: (props: any) => (
			<a {...props} href='/#'>
				Link component
			</a>
		),
	},
};
