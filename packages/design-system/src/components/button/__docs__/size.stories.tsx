import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button/Size',
	component: Button,
	args: { children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		appearance: 'primary',
		children: 'Default size',
		spacing: 'default',
	},
};

export const Compact: Story = {
	args: {
		appearance: 'primary',
		children: 'Compact size',
		spacing: 'compact',
	},
};

export const None: Story = {
	args: {
		appearance: 'link',
		children: 'None size',
		spacing: 'none',
	},
};

export const FullWidth: Story = {
	args: {
		appearance: 'primary',
		children: 'Full width button',
		shouldFitContainer: true,
	},
};
