import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		appearance: 'default',
		children: 'Primary button',
	},
};
