import React from 'react';

import IconEmoji from '@atlaskit/icon/glyph/emoji';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

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

export const Component: Story = {
	args: {
		appearance: 'default',
		component: (props: any) => (
			<a {...props} href='/#'>
				Link component
			</a>
		),
	},
};
