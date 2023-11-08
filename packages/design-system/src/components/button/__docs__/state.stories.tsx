import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button/States',
	component: Button,
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * __States__
 */
export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
};

export const Selected: Story = {
	args: {
		isSelected: true,
	},
};

export const Loading: Story = {
	args: {
		appearance: 'primary',
		isLoading: true,
	},
};
