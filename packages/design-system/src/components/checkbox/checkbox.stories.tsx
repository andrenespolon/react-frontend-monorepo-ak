import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './index';

const meta: Meta<typeof Checkbox> = {
	title: 'Components/Checkbox',
	component: Checkbox,
	parameters: {},
	args: {},
} satisfies Meta<typeof Checkbox>;

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
		label: 'Size large',
	},
};
