import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button/Appearence',
	component: Button,
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * __Appearence__
 */
export const Primary: Story = {
	args: {
		appearance: 'primary',
		children: 'Primary button',
	},
};

export const Default: Story = {
	args: {
		children: 'Default button',
	},
};

export const Subtle: Story = {
	args: {
		appearance: 'subtle',
		children: 'Subtle button',
	},
};

export const Link: Story = {
	args: {
		appearance: 'link',
		children: 'Link button',
	},
};

export const SubtleLink: Story = {
	args: {
		appearance: 'subtle-link',
		children: 'Subtle link button',
	},
};

export const Warning: Story = {
	args: {
		appearance: 'warning',
		children: 'Warning button',
	},
};

export const Danger: Story = {
	args: {
		appearance: 'danger',
		children: 'Danger button',
	},
};
