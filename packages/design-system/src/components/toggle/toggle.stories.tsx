import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './index';

const meta: Meta<typeof Toggle> = {
	title: 'Components/Toggle',
	component: Toggle,
	parameters: {},
	args: {},
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 'default',
		label: 'Default checkbox',
	},
};

export const Checked: Story = {
	args: {
		value: 'default',
		label: 'Default checkbox',
		isChecked: true,
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
		value: 'default',
		label: 'Default checkbox',
	},
};

export const Size: Story = {
	args: {
		size: 'large',
		value: 'default',
		label: 'Default checkbox',
	},
};
